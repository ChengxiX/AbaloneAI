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
    ((dx, dy), 行, 列, 更多的行, 更多的列, 更多的行, 更多的列) 行列是坐标，列指行里的序数，按行序号排序，行相等时按列排序
在validate仍然还是接受(方向, 行, 列, 更多的行, 更多的列, 更多的行, 更多的列)
"""


class InvalidOperation(Exception): pass


class CannotGo(InvalidOperation): pass  # 到边界


class CannotPush(InvalidOperation): pass  # 推不动


class InvalidDirection(InvalidOperation): pass


class Game:
    def __init__(self):
        self.board = [[3, 3, 3, 3, 3, 0, 0, 0, 0], [3, 3, 3, 3, 3, 3, 0, 0, 0], [1, 1, 3, 3, 3, 1, 1, 0, 0],
                      [1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1],
                      [0, 0, 1, 1, 2, 2, 2, 1, 1], [0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]
        self.dead = []

    def operate(self, player: int, op: tuple, test: bool = False):
        """不验证一部分操作合法性"""
        b = deepcopy(self.board)
        amount = len(op) // 2

        if amount != 1:
            dir = self.get_direction(op[1:])
        if amount == 1 or op[0] in (dir, dir + 1):  # 单个走或者平移
            try:
                for i in range(amount):
                    if b[op[i * 2 + 1] + op[0][0]][op[i * 2 + 2] + op[0][1]] == 1:
                        b[op[i * 2 + 1] + op[0][0]][op[i * 2 + 2] + op[0][1]] = player
                        b[op[i * 2 + 1]][op[i * 2 + 2]] = 1
                    else:
                        raise CannotGo
            except IndexError:
                raise CannotGo
        else:  # 推
            if op[0][0] == 1:
                xm = max(*[op[i * 2 + 1] for i in range(amount)])
            elif op[0][0] == -1:
                xm = min(*[op[i * 2 + 1] for i in range(amount)])
            else:  # == 0
                xm = op[1]
            if op[0][1] == 1:
                ym = max(*[op[i * 2 + 2] for i in range(amount)])
            elif op[0][1] == -1:
                ym = min(*[op[i * 2 + 2] for i in range(amount)])
            else:  # == 0
                ym = op[2]
            enemy_amount = 0
            try:
                while b[xm + (enemy_amount + 1) * op[0][0]][ym + (enemy_amount + 1) * op[0][1]] == (2 if player == 3 else 3):
                    enemy_amount += 1
            except IndexError:
                if amount > enemy_amount > 0:
                    self.dead.append(2 if player == 3 else 3)
                elif enemy_amount >= amount:
                    raise CannotPush
                else:
                    raise CannotGo
            else:
                if enemy_amount >= amount:
                    raise CannotPush
                elif b[xm + (enemy_amount + 1) * op[0][0]][ym + (enemy_amount + 1) * op[0][1]] == player:
                    raise CannotPush
                elif enemy_amount > 0:
                    if b[xm + (enemy_amount + 1) * op[0][0]][ym + (enemy_amount + 1) * op[0][1]] == 1:
                        b[xm + (enemy_amount + 1) * op[0][0]][ym + (enemy_amount + 1) * op[0][1]] = 2 if player == 3 else 3
                    elif b[xm + (enemy_amount + 1) * op[0][0]][ym + (enemy_amount + 1) * op[0][1]] == 0:
                        self.dead.append(2 if player == 3 else 3)
            b[xm + op[0][0]][ym + op[0][1]] = player
            b[xm - (amount - 1) * op[0][0]][ym - (amount - 1) * op[0][1]] = 1
        if not test:
            self.commit(b)
            return
        else:
            return True

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
        if not len(op) in (3, 5, 7):
            raise InvalidOperation
        elif len(op) == 5:
            dx = op[3] - op[1]
            dy = op[4] - op[2]
            if not (dx, dy) in ((0, 1), (0, -1), (1, 1), (-1, -1), (1, 0), (-1, 0)):  # 没挨着
                raise InvalidOperation
        elif len(op) == 7:
            pairs = [(op[i + 1], op[i + 2]) for i in range(len(op) // 2)]
            pairs.sort()
            dx = pairs[0][0] - pairs[1][0]
            dy = pairs[0][1] - pairs[1][1]
            if not (dx, dy) in ((0, 1), (0, -1), (1, 1), (-1, -1), (1, 0), (-1, 0)):  # 没挨着
                raise InvalidOperation
            if pairs[1][0] - pairs[2][0] != dx or pairs[1][1] - pairs[2][1] != dy:
                raise InvalidOperation
        for i in range(len(op) // 2):
            if self.board[i * 2 + 1][i * 2 + 2] != player:
                raise InvalidOperation
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
        return self.operate(player, tuple([(dx, dy)]+op[1:]))

    def judge(self):
        """返回2是黑棋输了，返回3是白棋输了，返回1是没有结束"""
        if self.dead.count(2) >= 6:
            return 2
        elif self.dead.count(3) >= 6:
            return 3
        else:
            return 1

    def available_op(self, player):
        enemy = 2 if player == 3 else 3
        result = []
        dir = 0
        for i in range(9):
            conti_p, conti_e, reverse, last = 0, 0, 0, 0
            for j in range(len(self.board[i]) + 1):
                if j == len(self.board[i]) or self.board[i][j] == 0:
                    if last == 0:
                        continue
                    elif last == enemy and conti_p > conti_e and conti_e < 3 and reverse == player:
                        for k in range(conti_e + 1, min(conti_p, 3) + 1):
                            res = [dir]
                            for l in range(j - min(conti_p, 3) - conti_e, j - conti_e)[- k:]:
                                res += [i, l]
                            result.append(tuple(res))
                    elif last == player:
                        if reverse == 1:
                            # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [dir + 1]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [i, l]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [dir + 1]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [i, l]
                                    result.append(tuple(res))
                    if j == len(self.board[i]):
                        break
                elif self.board[i][j] == player:
                    if last == 1:
                        reverse = 1
                        conti_p = 1
                    elif last == enemy:
                        # 如果reverse是player就两面包夹之势了，推不动
                        if not reverse == player:
                            reverse = enemy
                        else:
                            reverse = 0
                        conti_p = 1
                    elif last == player:
                        conti_p += 1
                elif self.board[i][j] == enemy:
                    if last == enemy:
                        conti_e += 1
                    elif last == player:
                        if reverse == 1:
                            # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [dir + 1]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [i, l]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [dir + 1]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [i, l]
                                    result.append(tuple(res))
                        reverse = player
                        conti_e = 1
                    elif last == 1:
                        reverse = 1
                        conti_e = 1
                elif self.board[i][j] == 1:
                    if last == player:
                        for k in range(1, min(conti_p, 3) + 1):  # 正向推空气
                            res = [dir]
                            for l in range(j - min(conti_p, 3), j)[-k:]:
                                res += [i, l]
                            result.append(tuple(res))
                        if reverse == 1:   # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [dir + 1]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [i, l]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [dir + 1]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [i, l]
                                    result.append(tuple(res))
                    elif last == enemy:
                        if conti_p > conti_e and conti_e < 3 and reverse == player:
                            for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                res = [dir]
                                for l in range(j - min(conti_p, 3) - conti_e, j - conti_e)[- k:]:
                                    res += [i, l]
                                result.append(tuple(res))
                    conti_p, conti_e = 0, 0
                last = self.board[i][j]
        return result


if __name__ == '__main__':
    g = Game()
    g.board = [[3, 3, 3, 3, 3, 0, 0, 0, 0], [1, 3, 3, 3, 2, 2, 0, 0, 0], [1, 1, 3, 3, 3, 3, 1, 0, 0],
               [1, 1, 3, 1, 1, 3, 1, 1, 0], [1, 1, 1, 1, 2, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1],
               [0, 0, 1, 1, 2, 2, 2, 1, 1], [0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]
    print(g.available_op(2))
