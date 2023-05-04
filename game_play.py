from game import *
import random

if __name__ == '__main__':
    random.seed(1)
    board = [[3, 3, 3, 3, 3, 0, 0, 0, 0], [3, 3, 3, 3, 3, 3, 0, 0, 0], [1, 1, 3, 3, 3, 1, 1, 0, 0],
             [1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1],
             [0, 0, 1, 1, 2, 2, 2, 1, 1], [0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]

    while True:

        print("----------Black's turn----------")
        av_op = available_op(board, 2)
        n = 0
        for i in av_op:
            print(n, i)
            n += 1
        display(board)
        op = av_op[int(input(":"))]
        board = operate(board, player=2, op=op)
        print(op)
        display(board)
        result = judge(board)
        if result == 2:
            print("Black win!")
        elif result == 3:
            print("White win!")
        input("press enter")

        print("----------White's turn----------")
        av_op = available_op(board, 3)
        n = 0
        for i in av_op:
            print(n, i)
            n += 1
        display(board)
        op = av_op[int(input(":"))]
        board = operate(board, player=3, op=op)
        print(op)
        display(board)
        result = judge(board)
        if result == 2:
            print("Black win!")
        elif result == 3:
            print("White win!")
        input("press enter")
