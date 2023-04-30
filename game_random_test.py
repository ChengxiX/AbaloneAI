import game
import random


if __name__ == '__main__':
    random.seed(1)
    g = game.Game()
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

        choice = random.choice(g.available_op(3, test=True))
        print(g.convert_long_to_short(choice))
        print(choice)
        g.operate(player=3, op=choice)
        g.display()
