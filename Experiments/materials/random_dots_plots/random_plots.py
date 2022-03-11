# -*- coding: utf-8 -*-
"""
生成指定圆点数量、位置随机的散点图。
"""
#%%
# import numpy as np
import random
import matplotlib.pyplot as plt
#%%
class RandomDotsPlot:
    '''
    位置随机的散点图'''
    def __init__(self, n):
        '''
        初始化

        Parameters
        ----------
        n : int
            圆点数量，小于60.

        Returns
        -------
        None.

        '''
        self.n = n
        self.x = random.choices(list(range(0, 61)), k=n)
        self.y = random.choices(list(range(0, 61)), k=n)
    def draw(self):
        '''
        绘制图像

        Returns
        -------
        None.

        '''
        plt.figure(figsize=(2, 2), dpi=200, facecolor='black')
        plt.scatter(self.x, self.y, s=2, c='w')
        plt.axis('off')
        plt.show()
    def save(self, fig_name):
        '''
        保存图像

        Parameters
        ----------
        fig_name :str
            文件名.

        Returns
        -------
        None.

        '''
        plt.figure(figsize=(2, 2), dpi=200, facecolor='black')
        plt.scatter(self.x, self.y, s=2, c='w')
        plt.axis('off')
        plt.savefig(fig_name)
        
#%%
if __name__ == '__main__':
    random_dots = RandomDotsPlot(35)
    random_dots.draw()
    random_dots.save("35.jpg")
