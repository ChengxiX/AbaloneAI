from bottle import Bottle, request, HTTPError

from game import Game, InvalidOperation

app = Bottle()

global g
global player


@app.post('/new_game')
def new_game():
    p = request.json['player']
    if p in (2, 3):
        player = p
    else:
        raise HTTPError(400, "Invalid Player")
    g = Game()


@app.post('/operate')
def operate():
    op = request.json['op']
    g.validate(player, tuple(op))
    # AI下一步棋

    return g.board


@app.get('/board')
def board():
    return g.board


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8060, debug=True)
