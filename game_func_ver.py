import game


def operate(board, player: int, op: tuple, test: bool = False):
    g = game.Game(board)
    g.operate(player, op)
    return g.board


def validate(board, player, op):
    g = game.Game(board)
    g.validate(player, op)
    return g.board


def judge(board):
    # 此处与对象版的实现不同，返回3是3(白)赢了，返回2是(黑)赢了，返回1是没有结束
    count2, count3 = 0, 0
    for i in board:
        for j in i:
            if j == 2:
                count2 += 1
            elif j == 3:
                count3 += 1
    if count2 <= 9 and count3 > 9:
        return 3
    elif count3 <= 9 and count2 > 9:
        return 2
    else:
        return 1

def available_op(board, player, test=False):
    return game.Game(board).available_op(player, test)

def display(board):
    game.Game(board).display()
