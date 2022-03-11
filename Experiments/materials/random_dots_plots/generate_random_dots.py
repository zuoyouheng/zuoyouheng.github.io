# -*- coding: utf-8 -*-
"""
Created on Sat Nov  6 11:02:53 2021

@author: zyh20
"""
#%%
import random
from random_plots import RandomDotsPlot
numbers = range(41, 61)
for n in numbers:
    n_plus = n + 1
    n_minus = n-1
    plot = RandomDotsPlot(n_plus)
    plot.save(f"{n}-1.jpg")
    plot = RandomDotsPlot(n_minus)
    plot.save(f"{n}-2.jpg")
#%%
with open("plots1.csv", 'a') as f:
    f.write("number,path\n")
    for n in numbers:
        f.write(f"{n},Minimal Groups/Random dots plot/{n}-1.png\n")

#%%
with open("plots2.csv", 'a') as f:
    f.write("number,path\n")
    for n in numbers:
        f.write(f"{n},Minimal Groups/Random dots plot/{n}-2.png\n")
