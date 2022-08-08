from typing import Union

"""
from enum import Enum
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

tuple 操作:
    (方向, 行, 列, 更多的行, 更多的列, 更多的行, 更多的列) 行列是坐标，列指行里的序数，按行序号排序，行相等时按列排序
"""


class InvalidOperation(Exception):
    pass


class Game:
    def __init__(self):
        self.board = [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [1, 1, 3, 3, 3, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1],
                      [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 2, 2, 2, 1, 1],
                      [0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]
        self.dead = []

    def operate(self, op):
        """不验证操作合法性"""


    def validate(self, op):
        """验证合法性"""
        if ...:
            raise InvalidOperation
        else:
            self.operate(op)

    def judge(self) -> Union[1,2,3]:
        """返回2是黑棋输了，返回3是白棋输了，返回1是没有j结束"""
        if self.dead.count(2) >= 6:
            return 2
        elif self.dead.count(3) >= 6:
            return 3
        else:
            return 1


# 从上到下


if __name__ == '__main__':
    g = Game()
    print(g.board)
