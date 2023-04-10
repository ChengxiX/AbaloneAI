import game
import random


if __name__ == '__main__':
    random.seed(5)
    g = game.Game()
    # g.display()
    for i in range(200):
        choice = random.choice(g.available_op(2))
        # print(g.convert_long_to_short(choice))
        # print(choice)
        g.operate(player=2, op=choice)
        # g.display()
    print('done')