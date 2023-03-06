# use pytorch
"""
GPU: RTX3060
CUDA: 11.3
install with: conda install pytorch torchvision torchaudio cudatoolkit=11.3
torch.__version__: 1.12.1
配置pytorch和CUDA遇到好多问题()
"""
import numpy as np
import torch
import game
import torch.nn as nn
import torch.nn.functional as F
from torch.autograd import Variable as V

print("cuda availability = {}".format(torch.cuda.is_available()))
print("torch.__version__ = {}".format(torch.__version__))
if torch.cuda.is_available():
    DEVICE = torch.device("cuda")
else:
    DEVICE = torch.device("cpu")

    
'''self.board = 
[[3, 3, 3, 3, 3, 0, 0, 0, 0],
[3, 3, 3, 3, 3, 3, 0, 0, 0],
[1, 1, 3, 3, 3, 1, 1, 0, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 0],
[1, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 1, 1, 1, 1, 1, 1, 1, 1],
[0, 0, 1, 1, 2, 2, 2, 1, 1],
[0, 0, 0, 2, 2, 2, 2, 2, 2],
[0, 0, 0, 0, 2, 2, 2, 2, 2]]
class 格子(Enum):
    边界 = 0
    空的 = 1
    黑棋 = 2  # 下方
    白棋 = 3  # 上方

class 方向(Enum):
    左_右 = 0
    右_左 = 1
    左上_右下 = 2
    右下_左上 = 3
    右上_左下 = 4
    左下_右上 = 5

class op_version(tuple):
    op = (最后一个棋子的x, 最后一个棋子的y, 剩余棋子延展方向六选一class方向, num棋子的多少, 六选一的偏向)
    六选一的偏向指如果偏左的平移就是0，不偏的推就是1，偏右的平移就是2

'''

MAP_TABLE = [36,28,20,12,4,-4,-12,-20,-28,45,37,29,21,13,5,-3,-11,-19,54,46,38,30,22,14,6,-2,-10,63,55,47,39,31,23,15,7,-1,72,64,56,48,40,32,24,16,8,81,73,65,57,49,41,33,25,17,90,82,74,66,58,50,42,34,26,99,91,83,75,67,59,51,43,35,108,100,92,84,76,68,60,52,44]

def convert_board(board, player):  # player:machine's side 0:white 1:black
    """
    input: board --> list
    output: input_board --> torch.Size([4, 9, 9])
    """
    board_tensor = torch.Tensor(board)
    board_border = torch.where(board_tensor == 0, 1, 0)
    board_white = torch.where(board_tensor == 3, 1, 0)
    board_black = torch.where(board_tensor == 2, 1, 0)
    board_player = torch.ones_like(board_tensor) * player
    return torch.stack([board_border, board_white, board_black, board_player])


class PolicyValueModule(nn.Module):
    def __init__(self):
        super(PolicyValueModule, self).__init__()
        # common layers
        # padding: 输入边沿扩边操作
        self.conv1 = nn.Conv2d(4, 32, kernel_size=(3,), padding=1)
        self.conv2 = nn.Conv2d(32, 64, kernel_size=(3,), padding=1)
        self.conv3 = nn.Conv2d(64, 128, kernel_size=(3,), padding=1)

        # action policy layers
        # num of all action(include a lot impossible ones) =
        # = first*second*third*direction
        # = (9*9)*(9*9+1)*(9*9+1)*6 = 3267864
        self.op = nn.Conv2d(128, 16, kernel_size=(1,))
        self.op_xydirec = nn.Conv2d(16, 6, kernel_size=(1,))
        self.op_num = nn.Linear(9 * 9, 3 * 9 * 9)
        self.op_final = nn.Conv3d(4, 6, kernel_size=(1,))
        self.op_final = nn.Linear(3 * 9 * 9,6 * 3 * 9 * 9)

        # state value layers
        self.sv_conv1 = nn.Conv2d(128, 4, kernel_size=(1,))
        self.sv_fc1 = nn.Linear(4 * 9 * 9, 64)
        self.sv_fc2 = nn.Linear(64, 1)
        pass

    @classmethod
    def transform(cls, board):
        new = [0]*81
        for i in range(81):
            pos = MAP_TABLE[i]
            if pos >=0:
                new[pos] = board[i]
        return new

    def forward(self, input_board):
        # input_board --> torch.Size([4, 9, 9])
        x = F.relu(self.conv1(input_board))
        x = F.relu(self.conv2(x))
        x = F.relu(self.conv3(x))

        # action policy
        # pick x & y
        op = F.relu(self.op(x))
        op_xydirec = F.relu(self.op_xydirec(op))
        # 以上op的形状是6*9*9, 第n层是指方向n，下面需要把所有的方向都变为方向0
        list_board = op_xydirec.view(-1, 6 * 9 * 9).numpy().tolist()
        op_final = torch.zeros([6,9,9],device=DEVICE)
        
        for i in range(6):
            list_board_i = list_board[i*81:82+i*81]
            for j in range(i):
                list_board_i = self.transform(list_board_i)
            list_board_i_num = F.relu(self.op_num(torch.tensor(list_board_i)))
            list_board_i_direc = F.relu(self.op_direc(list_board_i_num))
            op_final[i] = F.tanh(list_board_i_direc)
            
        
        op = F.relu(self.op_num(op))
        direc_plus = F.log_softmax(self.direc_plus(op))
        self.transform()

        # state value
        sv = F.relu(self.sv_conv1(x))
        sv = sv.view(-1, 4 * 9 * 9)
        sv = F.relu(self.sv_fc1(sv))
        # F.tanh function for [-1,1] value output
        sv = F.tanh(self.sv_fc2(sv))

        return ap1, ap2, ap3, ap_direc, sv


class PolicyValueNet:
    def __init__(self, Module=PolicyValueModule, l2_const=1e-4, model_file=None, use_gpu=True):
        self.use_gpu = use_gpu
        self.l2_const = l2_const
        if self.use_gpu:
            self.poliy_value_net = Module().cuda()
        else:
            self.poliy_value_net = Module()

        self.opt = torch.optim.Adam(self.poliy_value_net.parameters(),
                                    weight_decay=self.l2_const)
        if model_file:
            self.poliy_value_net.load_state_dict(torch.load(model_file))
            self.file = True
        else:
            self.file = False

    def policy_value(self):
        pass

    def policy_value_output(self, broad, player):
        available_op = game.Game.available_op(broad)  #
        input_board = convert_board(broad, player)
        if self.use_gpu:
            ap1, ap2, ap3, ap_direc, sv = self.poliy_value_net(
                V(input_board).cuda().float()
            )
        act_probs = None
        value_of_state = None
        return act_probs, value_of_state

    def train_step(self):
        pass

    def get_policy_param(self):
        net_params = self.poliy_value_net.state_dict()
        return net_params

    def save_model(self, model_file):
        torch.save(self.get_policy_param(), model_file)
