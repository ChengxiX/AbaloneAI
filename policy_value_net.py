# use pytorch
"""
GPU RTX3060
CUDA 11.3
install with: conda install pytorch torchvision torchaudio cudatoolkit=11.3
配置pytorch和CUDA遇到好多问题（）
"""
import numpy as np
import torch
print("cuda availability: {}".format(torch.cuda.is_available()))
