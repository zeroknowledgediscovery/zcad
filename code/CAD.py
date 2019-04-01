#!/usr/bin/python3
import ccx as cx
import pickle
import pandas as pd
import numpy as np


nfeatures=211

def ask(item,B=0,E=5):
    if item < 0:
        return {item:0}
    response=input(' Response to item '+str(item)+': ')
    return {item:int(response)}


modelset=cx.load('../model/model_2_3.pkl')
model=cx.chooseForm(modelset)

cx.drawTrees(model,PREF='../model/this')
[r,p]=cx.runCAD(model,nfeatures,ask=ask)
print(p)
