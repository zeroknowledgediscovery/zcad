import numpy as np
import matplotlib.pyplot as plt
from sklearn import svm
import pandas as pd
import seaborn as sns
from sklearn import svm
from sklearn.model_selection import train_test_split
from sklearn import metrics
from sklearn import neighbors, datasets
from sklearn.model_selection import cross_val_score
from sklearn.datasets import make_blobs
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import ExtraTreesClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.ensemble import AdaBoostClassifier
from sklearn.ensemble import GradientBoostingClassifier
from scipy.spatial import ConvexHull
from tqdm import tqdm
import random
import pickle
from sklearn import tree
from sklearn.tree import export_graphviz
from joblib import dump, load

DEBUG=False


def pickleModel(models,threshold=0.87,filename='model.pkl',verbose=True):
    '''
        save trained model set
    '''
    MODELS=[]
    for key,mds in models.items():
        if key >= threshold:
            mds_=[i[0] for i in mds]
            MODELS.extend(mds_)
    if verbose:
        print("number of models (tests):", len(MODELS))
        FS=getCoverage(MODELS,verbose=True)
        print("Item Use Fraction:", FS.size/(len(MODELS)+0.0))
    dump(MODELS, filename)
    return

def loadModel(filename):
    '''
        load models
    '''
    return load(filename)

def drawTrees(model,PREF='../'):
    '''
        draw the estimators (trees)
        in a single model
    '''
    N=len(model.estimators_)

    for count in range(N):
        estimator = model.estimators_[count]

        export_graphviz(estimator, out_file=PREF+'tree.dot', 
                        #feature_names = iris.feature_names,
                        #class_names = iris.target_names,
                        rounded = True, proportion = False, 
                        precision = 2, filled = True)

        from subprocess import call
        call(['dot', '-Tpng',  PREF+'tree.dot', '-o', PREF+'tree'+str(count)+'.png', '-Gdpi=600'])
        from IPython.display import Image
        Image(filename = PREF+'tree'+str(count)+'.png') 

def getCoverage(model,verbose=True):
    '''
        return how many distinct items (questions)
        are used in the model set.
        This includes the set of questions being
        covered by all forms that may be 
        generated by the model set
    '''
    FS=[]
    for m in model:
        for count in range(len(m.estimators_)):
            clf=m.estimators_[count]
            fs=clf.tree_.feature[clf.tree_.feature>0]
            FS=np.array(list(set(np.append(FS,fs))))
    if verbose:
        print("Number of items used: ", FS.size)
    return FS

def getAuc(X,y,test_size=0.25,max_depth=None,n_estimators=100,
           minsplit=4,FPR=[],TPR=[],VERBOSE=False, USE_ONLY=None):
    '''
        get AUC given training data X, with target labels y
    '''
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size)
    CLASSIFIERS=[DecisionTreeClassifier(max_depth=max_depth, min_samples_split=minsplit),
                RandomForestClassifier(n_estimators=n_estimators,
                                       max_depth=max_depth,min_samples_split=minsplit),
                ExtraTreesClassifier(n_estimators=n_estimators,
                                     max_depth=max_depth,min_samples_split=minsplit),
                AdaBoostClassifier(n_estimators=n_estimators),
                GradientBoostingClassifier(n_estimators=n_estimators,max_depth=max_depth),
                svm.SVC(kernel='rbf',gamma='scale',class_weight='balanced',probability=True)]

    if USE_ONLY is not None:
        if isinstance(USE_ONLY, (list,)):
            CLASSIFIERS=[CLASSIFIERS[i] for i in USE_ONLY]
        if isinstance(USE_ONLY, (int,)):
            CLASSIFIERS=CLASSIFIERS[USE_ONLY]

    for clf in CLASSIFIERS:
        clf.fit(X_train,y_train)
        y_pred=clf.predict_proba(X_test)
        fpr, tpr, thresholds = metrics.roc_curve(y_test,y_pred[:,1], pos_label=1)
        auc=metrics.auc(fpr, tpr)
        if VERBOSE:
            print(auc)

        FPR=np.append(FPR,fpr)
        TPR=np.append(TPR,tpr)
    points=np.array([[a[0],a[1]] for a in zip(FPR,TPR)])
    hull = ConvexHull(points)
    x=np.argsort(points[hull.vertices,:][:,0])
    auc=metrics.auc(points[hull.vertices,:][x,0],points[hull.vertices,:][x,1])
    return auc,CLASSIFIERS

#test model
def getModel(P,X,y,THRESHOLD=0.9):
    '''
        Select only models with minimum AUC
    '''
    Pgood=[model for (auc,model) in zip(P[::2],P[1::2]) if auc > THRESHOLD]
    AUC=[]
    if len(Pgood)==0:
        return Pgood,len(Pgood),0,0,0,[]
    for i in tqdm(range(1000)):
        random_choice=random.randint(0,len(Pgood)-1)
        clf=Pgood[random_choice][0]
        # pretend as if we have not sen any of this data before
        # but we have!
        # need to only use test data here
        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.8)
        y_pred=clf.predict_proba(X_test)
        fpr, tpr, thresholds = metrics.roc_curve(y_test,y_pred[:,1], pos_label=1)
        auc=metrics.auc(fpr, tpr)
        AUC=np.append(AUC,auc)
    DEPTH=Pgood[0][0].max_depth
    N_ESTIMATORS=Pgood[0][0].n_estimators
    
    NITEMS=DEPTH*N_ESTIMATORS
    VARIATIONS=len(Pgood)#2*DEPTH*len(Pgood)
    return Pgood,len(Pgood),np.median(AUC),NITEMS,VARIATIONS,AUC

def getSystem(X,y,max_depth=2,n_estimators=3):
    '''
        get model set with training data X and target labels y
        -> calls getAUC, and getModel
    '''
    P1=[]
    for i in tqdm(range(100)):
        #USE_ONLY=2 implies ExtraTreesClassifier is used only
        P1=np.append(P1,getAuc(X,y,minsplit=2,max_depth=max_depth,
                               n_estimators=n_estimators,USE_ONLY=[2]))
    PERF=[]
    DPERF={}
    MODELS={}
    for threshold in np.arange(0.8,0.95,0.01):
        Pgood,nmodels,auc_,NITEMS,VARIATIONS,AUC=getModel(P1,X,y,threshold)
        if len(Pgood) > 0:
            PERF=np.append(PERF,[auc_,NITEMS,VARIATIONS])
            DPERF[VARIATIONS]=AUC
            MODELS[auc_]=Pgood
    PERF=PERF.reshape(int(len(PERF)/3),3)    
    return PERF,DPERF,MODELS,NITEMS

def PLOT(Dperf,Nitems,N=1000,dn=''):
    '''
        Plots the achieved AUC along with 
        confidence bounds against the 
        number of different forms 
        generated.
    '''
    NUMQ='No. of Items Per Subject: '+str(Nitems)
    Df=pd.DataFrame(Dperf)
    dfs=Df.std()
    dfm=Df.mean()
    plt.figure(figsize=[8,6])
    dfm.plot(marker='o',color='r',ms=10,markeredgecolor='w',markerfacecolor='k',lw=2)
    (dfm+2.62*(dfs/np.sqrt(N))).plot(ls='--',color='.5')
    (dfm-2.62*(dfs/np.sqrt(N))).plot(ls='--',color='.5')
    plt.xlabel('No. of different question sets')
    plt.ylabel('mean AUC')
    plt.title('AUC vs Test Variation (99% CB)',fontsize=12,fontweight='bold')
    plt.text(0.55,0.9,NUMQ,transform=plt.gca().transAxes,fontweight='bold',
             fontsize=12,bbox=dict(facecolor='k', alpha=0.4),color='w')
    pdfname='../model/Result'+dn+'.pdf'
    plt.savefig(pdfname,dpi=300,bbox_inches='tight',pad_inches=0,transparent=False)
    return




def chooseForm(modelset,index=None):
    if index is None:
        index=cx.random.randint(0,len(modelset)-1)
    return modelset[index]


def ask(item,B=0,E=5):
    response=random.randint(B,E)
    return {item:response}


def getNodeid(model,nodeid=None,responses=None,ask=ask,DEBUG=DEBUG):
    if responses is None:
        responses={}
    if nodeid is None:
        nodeid=np.zeros(model.n_estimators).astype(int)
    
    items=[model.estimators_[i].tree_.feature[nodeid[i]] 
              for i in range(model.n_estimators)]
    
    for i in np.arange(len(items)):
        if nodeid[i] < 0:
            continue
        if items[i] not in responses:
            responses.update(ask(items[i]))
        if responses[items[i]] < model.estimators_[i].tree_.threshold[nodeid[i]]:
            nodeid[i]=model.estimators_[i].tree_.children_left[nodeid[i]]
        else:
            nodeid[i]=model.estimators_[i].tree_.children_right[nodeid[i]]
    
    responses.pop(-2,None)
    if DEBUG:
        print(nodeid)
    return nodeid,responses


def runCAD(model,nfeatures,ask=ask):
    nodeid=np.zeros(model.n_estimators).astype(int)
    responses={}
    while not all(nodeid<0):
        [nodeid,responses]=getNodeid(model,nodeid=nodeid,responses=responses,ask=ask)
    
    Xs=np.zeros(nfeatures)
    for key in responses.keys():
        Xs[key]=responses[key]
    prd=model.predict_proba(Xs.reshape(1, -1))

    return responses,prd


def chooseForm(modelset,index=None):
    if index is None:
        index=random.randint(0,len(modelset)-1)
    return modelset[index]
