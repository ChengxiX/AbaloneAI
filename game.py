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


class InvalidOperation(Exception): pass
class CannotGo(InvalidOperation): pass  # 到边界
class CannotPush(InvalidOperation): pass  # 推不动
class InvalidDirection(InvalidOperation): pass


class Game:
    def __init__(self):
        self.board = [[3, 3, 3, 3, 3], [3, 3, 3, 3, 3, 3], [1, 1, 3, 3, 3, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1],
                      [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1], [0, 0, 1, 1, 2, 2, 2, 1, 1],
                      [0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]
        self.dead = []

    def operate(self, player: int, op: tuple):
        """不验证一部分操作合法性"""
        b = deepcopy(self.board)
        amount = len(op) // 2
        if op[0] == 0:
            dx, dy = 0, 1
        elif op[0] == 1:
            dx, dy = 0, -1
        elif op[0] == 2:
            dx, dy = 1, 1
        elif op[0] == 3:
            dx, dy = -1, -1
        elif op[0] == 4:
            dx, dy = 1, 0
        elif op[0] == 5:
            dx, dy = -1, 0
        else:
            raise InvalidDirection
        if amount != 1:
            dir = self.get_direction(op[1:])
        if amount == 1 or (dir != op[0] and dir + 1 != op[0]):  # 单个走或者平移
            try:
                for i in range(amount):
                    if b[op[i * 2 + 1] + dx][op[i * 2 + 2] + dy] == 1:
                        b[op[i * 2 + 1] + dx][op[i * 2 + 2] + dy] = player
                        b[op[i * 2 + 1]][op[i * 2 + 2]] = 1
                    else:
                        raise CannotGo
            except IndexError:
                raise CannotGo
        else:  # 推
            if dx == 1:
                xm = max(*[op[i*2+1] for i in range(amount)])
            elif dx == -1:
                xm = min(*[op[i*2+1] for i in range(amount)])
            else:  # == 0
                xm = op[1]
            if dy == 1:
                ym = max(*[op[i*2+2] for i in range(amount)])
            elif dy == -1:
                ym = min(*[op[i*2+2] for i in range(amount)])
            else:  # == 0
                ym = op[2]
            enemy_amount = 0
            try:
                while b[xm + (enemy_amount + 1) * dx][ym + (enemy_amount + 1) * dy] == (2 if player == 3 else 3):
                    enemy_amount += 1
            except IndexError:
                if enemy_amount >= amount:
                    raise CannotPush
                elif enemy_amount > 0:
                    self.dead.append(2 if player == 3 else 3)
                else:
                    raise CannotGo
            else:
                if enemy_amount >= amount:
                    raise CannotPush
                elif b[xm + (enemy_amount + 1) * dx][ym + (enemy_amount + 1) * dy] == player:
                    raise CannotPush
                elif enemy_amount > 0:
                    if b[xm + (enemy_amount + 1) * dx][ym + (enemy_amount + 1) * dy] == 1:
                        b[xm + (enemy_amount + 1) * dx][ym + (enemy_amount + 1) * dy] = 2 if player == 3 else 3
                    elif b[xm + (enemy_amount + 1) * dx][ym + (enemy_amount + 1) * dy] == 0:
                        self.dead.append(2 if player == 3 else 3)
            b[xm + dx][ym + dy] = player
            b[xm - (amount - 1) * dx][ym - (amount - 1) * dy] = 1
        self.commit(b)
        return

    @classmethod
    def get_direction(cls, pairs: tuple):
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

    def validate(self, player, op):
        """验证合法性，主要是1.棋子都是己方的，数量小于4 2.棋子都在一条线上且挨着"""
        amount = len(op) // 2
        pairs = [(op[i * 2 + 1], op[i * 2 + 2]) for i in range(amount)]
        pairs.sort()
        if not len(op) in (3, 5, 7):
            raise InvalidOperation
        elif len(op) > 3:
            dx = pairs[0][0] - pairs[1][0]
            dy = pairs[0][1] - pairs[1][1]
            for i in range(len(pairs)-2):
                if pairs[i+1][0] - pairs[i+2][0] != dx or pairs[i+1][1] - pairs[i+1][1] != dy:
                    raise InvalidOperation
        for i in pairs:
            if self.board[i[0]][i[1]] != player:
                raise InvalidOperation
        return self.operate(player, op)

    def judge(self):
        """返回2是黑棋输了，返回3是白棋输了，返回1是没有结束"""
        if self.dead.count(2) >= 6:
            return 2
        elif self.dead.count(3) >= 6:
            return 3
        else:
            return 1
