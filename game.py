from typing import Tuple
from copy import deepcopy

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


class CannotPush(InvalidOperation):
    pass


class Game:
    def __init__(self):
        self.board = [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [1, 1, 3, 3, 3, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1],
                      [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 2, 2, 2, 1, 1],
                      [0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]
        self.dead = []

    def operate(self, player: int, op: Tuple[int]):
        """不验证一部分操作合法性"""
        b = deepcopy(self.board)
        amount = len(op) // 2
        dir = self.get_direction(op[1:])
        if amount == 1 or (dir != op[0] and dir + 1 != op[0]):  # 单个走或者平移
            if op[0] == 0 or op[0] == 1:
                d = 1 if op[0] == 0 else -1
                for i in range(amount):
                    if b[op[i * 2 + 1]][op[i * 2 + 2] + d] == 1:
                        b[op[i * 2 + 1]][op[i * 2 + 2] + d] = player
                        b[op[i * 2 + 1]][op[i * 2 + 2]] = 1
                    else:
                        raise CannotPush
            elif op[0] == 2 or op[0] == 3:
                d = 1 if op[0] == 2 else -1
                for i in range(amount):
                    if b[op[i * 2 + 1] + d][op[i * 2 + 2] + d] == 1:
                        b[op[i * 2 + 1] + d][op[i * 2 + 2] + d] = player
                        b[op[i * 2 + 1]][op[i * 2 + 2]] = 1
                    else:
                        raise CannotPush
            else:
                d = 1 if op[0] == 4 else -1
                for i in range(amount):
                    if b[op[i * 2 + 1] + d][op[i * 2 + 2]] == 1:
                        b[op[i * 2 + 1] + d][op[i * 2 + 2]] = player
                        b[op[i * 2 + 1]][op[i * 2 + 2]] = 1
                    else:
                        raise CannotPush
            self.commit(b)
            return
        else:  # 推


    @classmethod
    def get_direction(cls, pairs: Tuple[int]):
        """(x,y,x,y,x,y) -> 0,2,4"""
        flag0 = True
        flag4 = True
        for i in range(len(pairs) // 2 - 1):
            if pairs[i * 2] != pairs[i * 2 + 2]:
                flag0 = False
            if pairs[i * 2 + 1] != pairs[i * 2 + 3]:
                flag4 = False
        if flag0:
            return 0
        if flag4:
            return 4
        return 2

    def commit(self, b):
        self.board = b

    def validate(self, op):
        """验证合法性"""
        if ...:
            raise InvalidOperation
        else:
            try:
                return self.operate(2, op)
            except IndexError:
                return "走出棋盘了"
            except CannotPush:
                return "棋盘位置有棋子且无法推动"

    def judge(self):
        """返回2是黑棋输了，返回3是白棋输了，返回1是没有结束"""
        if self.dead.count(2) >= 6:
            return 2
        elif self.dead.count(3) >= 6:
            return 3
        else:
            return 1


# 从上到下


if __name__ == '__main__':
    g = Game()
