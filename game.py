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

tuple 操作 长版long:
    ((dx, dy), 行, 列, 更多的行, 更多的列, 更多的行, 更多的列) 行列是坐标，列指行里的序数，按行序号排序，行相等时按列排序
tuple 操作 面向人的长版human-long: (在validate仍然还是接受)
    (方向, 行, 列, 更多的行, 更多的列, 更多的行, 更多的列)
tuple 操作 面向机器的短版short:
    (最后一个棋子的x, 最后一个棋子的y, 剩余棋子延展方向六选一class方向, num棋子的多少, 六选一的偏向)
    六选一的偏向指如果偏左的平移就是0，不偏的推就是1，偏右的平移就是2
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

    @classmethod
    def convert_direction(cls, dir: int):
        if dir == 0:
            return (0, 1)
        elif dir == 1:
            return (0, -1)
        elif dir == 2:
            return (1, 1)
        elif dir == 3:
            return (-1, -1)
        elif dir == 4:
            return (1, 0)
        elif dir == 5:
            return (-1, 0)
    
    @classmethod
    def convert_direction_2(cls, dir: tuple):
        if dir == (0, 1):
            return 0
        elif dir == (0, -1):
            return 1
        elif dir == (1, 1):
            return 2
        elif dir == (-1, -1):
            return 3
        elif dir == (1, 0):
            return 4
        elif dir == (-1, 0):
            return 5
        else:
            raise InvalidDirection

    def operate(self, player: int, op: tuple, test: bool = False):
        """不验证一部分操作合法性，接受human_long而不是long"""
        b = deepcopy(self.board)
        amount = len(op) // 2

        if amount != 1:
            dir = self.get_direction(op[1:])
        move_dir = self.convert_direction_2(op[0])
        if amount == 1 or not (move_dir in {dir, dir + 1}):  # 单个走或者平移 # 寒假末在这里加了一个not，应该是最早的时候漏掉了
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
            # 下面这段是要获取最前面，直接怼着对面的棋子
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
                while b[xm + (enemy_amount + 1) * op[0][0]][ym + (enemy_amount + 1) * op[0][1]] == (
                        2 if player == 3 else 3):
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
                        b[xm + (enemy_amount + 1) * op[0][0]][
                            ym + (enemy_amount + 1) * op[0][1]] = 2 if player == 3 else 3
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
    def convert_long_to_short(cls, op):
        dir = cls.convert_direction_2(op[0])
        amount = len(op) // 2
        if amount == 1:
            return op[1], op[2], dir, 1  # 特例，只有一个
        place_dir = cls.get_direction(op[1:])
        if dir in {place_dir, place_dir + 1}:  # 推
            # 下面这段是要获取最后面的棋子
            if op[0][0] == 1:
                xm = min(*[op[i * 2 + 1] for i in range(amount)])
            elif op[0][0] == -1:
                xm = max(*[op[i * 2 + 1] for i in range(amount)])
            else:  # == 0
                xm = op[1]
            if op[0][1] == 1:
                ym = min(*[op[i * 2 + 2] for i in range(amount)])
            elif op[0][1] == -1:
                ym = max(*[op[i * 2 + 2] for i in range(amount)])
            else:  # == 0
                ym = op[2]
            return xm, ym, dir, amount, 1
        # 平移
        if place_dir == 0:
            xm = op[1]
            if dir in {2, 5}:
                ym = min(*[op[i * 2 + 2] for i in range(amount)])
                if dir == 2:
                    return xm, ym, 0, amount, 2
                else:
                    return xm, ym, 0, amount, 0
            else:
                ym = max(*[op[i * 2 + 2] for i in range(amount)])
                if dir == 3:
                    return xm, ym, 1, amount, 2
                else:
                    return xm, ym, 1, amount, 0
        elif place_dir == 2:
            if dir in {0, 4}:
                xm = min(*[op[i * 2 + 1] for i in range(amount)])
                ym = min(*[op[i * 2 + 2] for i in range(amount)])
                if dir == 4:
                    return xm, ym, 2, amount, 2
                else:
                    return xm, ym, 2, amount, 0
            else:
                xm = max(*[op[i * 2 + 1] for i in range(amount)])
                ym = max(*[op[i * 2 + 2] for i in range(amount)])
                if dir == 5:
                    return xm, ym, 3, amount, 2
                else:
                    return xm, ym, 3, amount, 0

        elif place_dir == 4:
            if dir in {1, 2}:
                xm = min(*[op[i * 2 + 1] for i in range(amount)])
                ym = op[2]
                if dir == 1:
                    return xm, ym, 4, amount, 2
                else:
                    return xm, ym, 4, amount, 0
            else:
                xm = max(*[op[i * 2 + 1] for i in range(amount)])
                ym = op[2]
                if dir == 0:
                    return xm, ym, 5, amount, 2
                else:
                    return xm, ym, 5, amount, 0

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

    def validate(self, player, op, test:bool = False):
        """验证合法性，主要是1.棋子都是己方的，数量小于4 2.棋子都在一条线上且挨着"""
        if not len(op) in {3, 5, 7}:
            raise InvalidOperation
        elif len(op) == 5:
            dx = op[3] - op[1]
            dy = op[4] - op[2]
            if not (dx, dy) in {(0, 1), (0, -1), (1, 1), (-1, -1), (1, 0), (-1, 0)}:  # 没挨着
                raise InvalidOperation
        elif len(op) == 7:
            pairs = [(op[i + 1], op[i + 2]) for i in range(len(op) // 2)]
            pairs.sort()
            dx = pairs[0][0] - pairs[1][0]
            dy = pairs[0][1] - pairs[1][1]
            if not (dx, dy) in {(0, 1), (0, -1), (1, 1), (-1, -1), (1, 0), (-1, 0)}:  # 没挨着
                raise InvalidOperation
            if pairs[1][0] - pairs[2][0] != dx or pairs[1][1] - pairs[2][1] != dy:
                raise InvalidOperation
        for i in range(len(op) // 2):
            if self.board[op[i * 2 + 1]][op[i * 2 + 2]] != player:
                raise InvalidOperation
        if type(op[0]) == int:
            dir = self.convert_direction(op[0])
        elif type(op[0]) ==  tuple:
            dir = op[0]
        else:
            raise
        return self.operate(player, (dir,) + op[1:], test=test)

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
        for i in range(9):
            conti_p, conti_e, reverse, last = 0, 0, 0, 0
            up_minus, up, down, down_add = [], [], [], []
            for j in range(10):
                if j == 9 or self.board[i][j] == 0:
                    if last == 0:
                        continue
                    elif last == enemy and conti_p > conti_e and conti_e < 3 and reverse == player:
                        for k in range(conti_e + 1, min(conti_p, 3) + 1):
                            res = [(0, 1)]
                            for l in range(j - min(conti_p, 3) - conti_e, j - conti_e)[- k:]:
                                res += [i, l]
                            result.append(tuple(res))
                    elif last == player:
                        if reverse == 1:
                            # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [(0, -1)]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [i, l]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [(0, -1)]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [i, l]
                                    result.append(tuple(res))
                    if j == 9:
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
                    else:
                        conti_p = 1
                    try:
                        if self.board[i - 1][j] == 1:
                            up.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[i - 1][j - 1] == 1:
                            up_minus.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[i + 1][j] == 1:
                            down.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[i + 1][j + 1] == 1:
                            down_add.append(j)
                    except IndexError:
                        pass
                elif self.board[i][j] == enemy:
                    if last == enemy:
                        conti_e += 1
                    elif last == player:
                        if reverse == 1:
                            # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [(0, -1)]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [i, l]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [(0, -1)]
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
                            res = [(0, 1)]
                            for l in range(j - min(conti_p, 3), j)[-k:]:
                                res += [i, l]
                            result.append(tuple(res))
                        if reverse == 1:  # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [(0, -1)]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [i, l]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [(0, -1)]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [i, l]
                                    result.append(tuple(res))
                    elif last == enemy:
                        if conti_p > conti_e and conti_e < 3 and reverse == player:
                            for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                res = [(0, 1)]
                                for l in range(j - min(conti_p, 3) - conti_e, j - conti_e)[- k:]:
                                    res += [i, l]
                                result.append(tuple(res))
                    conti_p, conti_e = 0, 0
                last = self.board[i][j]
            for k in range(len(up) - 2):
                if up[k + 1] == up[k] + 1:
                    result.append(((-1, 0), i, up[k], i, up[k + 1]))
                    if len(up) > 2 and up[k + 2] == up[k + 1] + 1:
                        result.append(((-1, 0), i, up[k], i, up[k + 1], i, up[k + 2]))
            if len(up) > 1 and up[-2] + 1 == up[-1]:
                result.append(((-1, 0), i, up[-2], i, up[-1]))
            for k in range(len(up_minus) - 2):
                if up_minus[k + 1] == up_minus[k] + 1:
                    result.append(((-1, -1), i, up_minus[k], i, up_minus[k + 1]))
                    if len(up_minus) > 2 and up_minus[k + 2] == up_minus[k + 1] + 1:
                        result.append(((-1, -1), i, up_minus[k], i, up_minus[k + 1], i, up_minus[k + 2]))
            if len(up_minus) > 1 and up_minus[-2] + 1 == up_minus[-1]:
                result.append(((-1, -1), i, up_minus[-2], i, up_minus[-1]))
            for k in range(len(down) - 2):
                if down[k + 1] == down[k] + 1:
                    result.append(((1, 0), i, down[k], i, down[k + 1]))
                    if len(down) > 2 and down[k + 2] == down[k + 1] + 1:
                        result.append(((1, 0), i, down[k], i, down[k + 1], i, down[k + 2]))
            if len(down) > 1 and down[-2] + 1 == down[-1]:
                result.append(((1, 0), i, down[-2], i, down[-1]))
            for k in range(len(down_add) - 2):
                if down_add[k + 1] == down_add[k] + 1:
                    result.append(((1, 1), i, down_add[k], i, down_add[k + 1]))
                    if len(down_add) > 2 and down_add[k + 2] == down_add[k + 1] + 1:
                        result.append(((1, 1), i, down_add[k], i, down_add[k + 1], i, down_add[k + 2]))
            if len(down_add) > 1 and down_add[-2] + 1 == down_add[-1]:
                result.append(((1, 1), i, down_add[-2], i, down_add[-1]))
        # 4和5的方向
        for i in range(9):
            conti_p, conti_e, reverse, last = 0, 0, 0, 0
            up_minus, up, down, down_add = [], [], [], []
            for j in range(10):
                if j == 9 or self.board[j][i] == 0:
                    if last == 0:
                        continue
                    elif last == enemy and conti_p > conti_e and conti_e < 3 and reverse == player:
                        for k in range(conti_e + 1, min(conti_p, 3) + 1):
                            res = [(1, 0)]
                            for l in range(j - min(conti_p, 3) - conti_e, j - conti_e)[- k:]:
                                res += [l, i]
                            result.append(tuple(res))
                    elif last == player:
                        if reverse == 1:
                            # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [(-1, 0)]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [l, i]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [(-1, 0)]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [l, i]
                                    result.append(tuple(res))
                    if j == 9:
                        break
                elif self.board[j][i] == player:
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
                    else:
                        conti_p = 1
                    try:
                        if self.board[j][i - 1] == 1:
                            up.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[j - 1][i - 1] == 1:
                            up_minus.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[j][i + 1] == 1:
                            down.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[j + 1][i + 1] == 1:
                            down_add.append(j)
                    except IndexError:
                        pass
                elif self.board[j][i] == enemy:
                    if last == enemy:
                        conti_e += 1
                    elif last == player:
                        if reverse == 1:
                            # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [(-1, 0)]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [l, i]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [(-1, 0)]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [l, i]
                                    result.append(tuple(res))
                        reverse = player
                        conti_e = 1
                    elif last == 1:
                        reverse = 1
                        conti_e = 1
                elif self.board[j][i] == 1:
                    if last == player:
                        for k in range(1, min(conti_p, 3) + 1):  # 正向推空气
                            res = [(1, 0)]
                            for l in range(j - min(conti_p, 3), j)[-k:]:
                                res += [l, i]
                            result.append(tuple(res))
                        if reverse == 1:  # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [(-1, 0)]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [l, i]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [(-1, 0)]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [l, i]
                                    result.append(tuple(res))
                    elif last == enemy:
                        if conti_p > conti_e and conti_e < 3 and reverse == player:
                            for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                res = [(1, 0)]
                                for l in range(j - min(conti_p, 3) - conti_e, j - conti_e)[- k:]:
                                    res += [l, i]
                                result.append(tuple(res))
                    conti_p, conti_e = 0, 0
                last = self.board[j][i]
            for k in range(len(up) - 2):
                if up[k + 1] == up[k] + 1:
                    result.append(((0, -1), up[k], i, up[k + 1], i))
                    if len(up) > 2 and up[k + 2] == up[k + 1] + 1:
                        result.append(((0, -1), up[k], i, up[k + 1], i, up[k + 2], i))
            if len(up) > 1 and up[-2] + 1 == up[-1]:
                result.append(((0, -1), up[-2], i, up[-1], i))
            for k in range(len(up_minus) - 2):
                if up_minus[k + 1] == up_minus[k] + 1:
                    result.append(((-1, -1), up_minus[k], i, up_minus[k + 1], i))
                    if len(up_minus) > 2 and up_minus[k + 2] == up_minus[k + 1] + 1:
                        result.append(((-1, -1), up_minus[k], i, up_minus[k + 1], i, up_minus[k + 2], i))
            if len(up_minus) > 1 and up_minus[-2] + 1 == up_minus[-1]:
                result.append(((-1, -1), up_minus[-2], i, up_minus[-1], i))
            for k in range(len(down) - 2):
                if down[k + 1] == down[k] + 1:
                    result.append(((0, 1), down[k], i, down[k + 1], i))
                    if len(down) > 2 and down[k + 2] == down[k + 1] + 1:
                        result.append(((0, 1), down[k], i, down[k + 1], i, down[k + 2], i))
            if len(down) > 1 and down[-2] + 1 == down[-1]:
                result.append(((0, 1), down[-2], i, down[-1], i))
            for k in range(len(down_add) - 2):
                if down_add[k + 1] == down_add[k] + 1:
                    result.append(((1, 1), down_add[k], i, down_add[k + 1], i))
                    if len(down_add) > 2 and down_add[k + 2] == down_add[k + 1] + 1:
                        result.append(((1, 1), down_add[k], i, down_add[k + 1], i, down_add[k + 2], i))
            if len(down_add) > 1 and down_add[-2] + 1 == down_add[-1]:
                result.append(((1, 1), down_add[-2], i, down_add[-1], i))
        # 2和3的方向
        for offset in range(-4, 5):
            conti_p, conti_e, reverse, last = 0, 0, 0, 0
            up_minus, up, down, down_add = [], [], [], []
            for j in range(10):
                try:
                    self.board[j + offset][j]
                except IndexError:
                    try:
                        self.board[j + offset - 1][j - 1]
                    except IndexError:
                        continue
                    else:
                        if last == enemy and conti_p > conti_e and conti_e < 3 and reverse == player:
                            for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                res = [(1, 1)]
                                for l in range(j - min(conti_p, 3) - conti_e, j - conti_e)[- k:]:
                                    res += [l + offset, l]
                                result.append(tuple(res))
                        elif last == player:
                            if reverse == 1:
                                # 反向推空气
                                for k in range(1, min(conti_p, 3) + 1):
                                    res = [(-1, -1)]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [l + offset, l]
                                    result.append(tuple(res))
                            elif reverse == enemy:
                                # 反向推敌方
                                if conti_p > conti_e and conti_e < 3:
                                    for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                        res = [(-1, -1)]
                                        for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                            res += [l + offset, l]
                                        result.append(tuple(res))
                        break
                if self.board[j + offset][j] == player:
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
                    else:
                        conti_p = 1
                    try:
                        if self.board[j + offset - 1][j] == 1:
                            up.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[j + offset][j + 1] == 1:
                            up_minus.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[j + offset + 1][j] == 1:
                            down.append(j)
                    except IndexError:
                        pass
                    try:
                        if self.board[j + offset][j - 1] == 1:
                            down_add.append(j)
                    except IndexError:
                        pass
                elif self.board[j + offset][j] == enemy:
                    if last == enemy:
                        conti_e += 1
                    elif last == player:
                        if reverse == 1:
                            # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [(-1, -1)]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [l + offset, l]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [(-1, -1)]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [l + offset, l]
                                    result.append(tuple(res))
                        reverse = player
                        conti_e = 1
                    elif last == 1:
                        reverse = 1
                        conti_e = 1
                elif self.board[j + offset][j] == 1:
                    if last == player:
                        for k in range(1, min(conti_p, 3) + 1):  # 正向推空气
                            res = [(1, 1)]
                            for l in range(j - min(conti_p, 3), j)[-k:]:
                                res += [l + offset, l]
                            result.append(tuple(res))
                        if reverse == 1:  # 反向推空气
                            for k in range(1, min(conti_p, 3) + 1):
                                res = [(-1, -1)]
                                for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                    res += [l + offset, l]
                                result.append(tuple(res))
                        elif reverse == enemy:
                            # 反向推敌方
                            if conti_p > conti_e and conti_e < 3:
                                for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                    res = [(-1, -1)]
                                    for l in range(j - conti_p, j - conti_p + min(conti_p, 3))[:k]:
                                        res += [l + offset, l]
                                    result.append(tuple(res))
                    elif last == enemy:
                        if conti_p > conti_e and conti_e < 3 and reverse == player:
                            for k in range(conti_e + 1, min(conti_p, 3) + 1):
                                res = [(1, 1)]
                                for l in range(j - min(conti_p, 3) - conti_e, j - conti_e)[- k:]:
                                    res += [l + offset, l]
                                result.append(tuple(res))
                    conti_p, conti_e = 0, 0
                last = self.board[j + offset][j]
            for k in range(len(up) - 2):
                if up[k + 1] == up[k] + 1:
                    result.append(((-1, 0), offset + up[k], up[k], offset + up[k + 1], up[k + 1]))
                    if len(up) > 2 and up[k + 2] == up[k + 1] + 1:
                        result.append((
                            (-1, 0), offset + up[k], up[k], offset + up[k + 1], up[k + 1], offset + up[k + 2],
                            up[k + 2]))
            if len(up) > 1 and up[-2] + 1 == up[-1]:
                result.append(((-1, 0), offset + up[-2], up[-2], offset + up[-1], up[-1]))
            for k in range(len(up_minus) - 2):
                if up_minus[k + 1] == up_minus[k] + 1:
                    result.append(
                        ((0, 1), up_minus[k] + offset, up_minus[k], up_minus[k + 1] + offset, up_minus[k + 1]))
                    if len(up_minus) > 2 and up_minus[k + 2] == up_minus[k + 1] + 1:
                        result.append(((0, 1), up_minus[k] + offset, up_minus[k], up_minus[k + 1] + offset,
                                       up_minus[k + 1], up_minus[k + 2] + offset, up_minus[k + 2]))
            if len(up_minus) > 1 and up_minus[-2] + 1 == up_minus[-1]:
                result.append(((0, 1), up_minus[-2] + offset, up_minus[-2], up_minus[-1] + offset, up_minus[-1]))
            for k in range(len(down) - 2):
                if down[k + 1] == down[k] + 1:
                    result.append(((1, 0), down[k] + offset, down[k], down[k + 1] + offset, down[k + 1]))
                    if len(down) > 2 and down[k + 2] == down[k + 1] + 1:
                        result.append(((1, 0), down[k] + offset, down[k], down[k + 1] + offset, down[k + 1],
                                       down[k + 2] + offset, down[k + 2]))
            if len(down) > 1 and down[-2] + 1 == down[-1]:
                result.append(((1, 0), down[-2] + offset, down[-2], down[-1] + offset, down[-1]))
            for k in range(len(down_add) - 2):
                if down_add[k + 1] == down_add[k] + 1:
                    result.append(
                        ((0, -1), down_add[k] + offset, down_add[k], down_add[k + 1] + offset, down_add[k + 1]))
                    if len(down_add) > 2 and down_add[k + 2] == down_add[k + 1] + 1:
                        result.append(((0, -1), down_add[k] + offset, down_add[k], down_add[k + 1] + offset,
                                       down_add[k + 1], down_add[k + 2] + offset, down_add[k + 2]))
            if len(down_add) > 1 and down_add[-2] + 1 == down_add[-1]:
                result.append(((0, -1), down_add[-2] + offset, down_add[-2], down_add[-1] + offset, down_add[-1]))
        try:
            for op in result:
                self.validate(player, op, True)
        except CannotGo:
            raise CannotGo
        return result
    
    def display(self):
        n = 10
        for i in self.board:
            n -= 1
            print(n * " ", end="")
            for j in i:
                if j == 3:
                    print("●", end=" ")
                if j == 2:
                    print("◎", end=" ")
                if j == 1:
                    print("◌", end=" ")
                if j == 0:
                    print(" ", end=" ")
            print("")

    def display(self):
        n = 10
        for i in self.board:
            n -= 1
            print(n * " ", end="")
            for j in i:
                if j == 3:
                    print("●", end=" ")
                if j == 2:
                    print("◎", end=" ")
                if j == 1:
                    print("◌", end=" ")
                if j == 0:
                    print(" ", end=" ")
            print("")


if __name__ == '__main__':
    import random

    import random
    g = Game()
    # g.board = [[3, 3, 3, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 0, 0],
    #            [1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1],
    #            [0, 0, 1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 1, 1, 1]]
    g.display()
    for i in range(200):
        choice = random.choice(g.available_op(2))
        print(g.convert_long_to_short(choice))
        print(choice)
        g.operate(player=2, op=choice)
        g.display()
