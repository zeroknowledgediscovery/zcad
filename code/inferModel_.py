#!/usr/bin/python3

import ccx as cx
import pylab as plt
plt.style.use('ggplot')
import pickle
import pandas as pd


datafile='../data/CAD-PTSDData.csv'



def processDATA(datafile):
    '''
        process data file 
        into training data X, target labels y
    '''
    Df=pd.read_csv(datafile)
    X=Df.drop(['record_id','PTSDDx'],axis=1).values
    y=Df.drop(['record_id'],axis=1).PTSDDx.values
    [nsamples,nfeatures]=X.shape
    return X,y,nfeatures,nsamples



X,y,nfeatures,nsamples=processDATA(datafile)
Perf23,Dperf23,Models23,Nitems23=cx.getSystem(X,y,max_depth=2,n_estimators=3)
print(Nitems23)
cx.PLOT(Dperf23,Nitems23,dn='23')

Perf32,Dperf32,Models32,Nitems32=cx.getSystem(X,y,max_depth=3,n_estimators=2)
cx.PLOT(Dperf32,Nitems32,dn='32')

cx.pickleModel(Models23,threshold=.88,filename='../model/model_2_3.pkl')
print("--")
cx.pickleModel(Models32,threshold=.895,filename='../model/model_3_2.pkl')

