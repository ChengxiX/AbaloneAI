from game import *
import random
import time

if __name__ == '__main__':
    random.seed(1)
    board = [[3, 3, 3, 3, 3, 0, 0, 0, 0], [3, 3, 3, 3, 3, 3, 0, 0, 0], [1, 1, 3, 3, 3, 1, 1, 0, 0],
             [1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1],
             [0, 0, 1, 1, 2, 2, 2, 1, 1], [0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]
    display(board)

    a = time.time()
    for i in range(10000):
        # print(i)
        choice = random.choice(available_op(board, 2))
        # print(convert_long_to_short(choice))
        # print(choice)
        board = operate(board, player=2, op=choice)
        # display(board)

        choice = random.choice(available_op(board, 3))
        # print(convert_long_to_short(choice))
        # print(choice)
        board = operate(board, player=3, op=choice)
        # display(board)
    b = time.time()
    display(board)
    print(b - a)
