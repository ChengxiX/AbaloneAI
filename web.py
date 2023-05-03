from bottle import Bottle, request, HTTPError
import datetime
import schedule

import game

app = Bottle()

DEFAULT_BOARD = [[3, 3, 3, 3, 3, 0, 0, 0, 0], [3, 3, 3, 3, 3, 3, 0, 0, 0], [1, 1, 3, 3, 3, 1, 1, 0, 0],
                [1, 1, 1, 1, 1, 1, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1, 1, 1], [0, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 1, 1, 2, 2, 2, 1, 1], [0, 0, 0, 2, 2, 2, 2, 2, 2], [0, 0, 0, 0, 2, 2, 2, 2, 2]]
games = {}
id = 0
"""
games: {id: {player: list, board: list, created_time: timestamp}}
"""

TIMEOUT = datetime.timedelta(minutes=30)

def refresh_outdated():
    for k, v in games.items():
        if v["created_time"] + TIMEOUT < datetime.datetime.now():
            games.pop(k)

schedule.every(10).minutes.do(refresh_outdated)


@app.post('/new_game')
def new_game():
    p = request.json['player']
    if not p in (2, 3):
        raise HTTPError(400, "Invalid Player")
    id += 1
    games[id] = {"board": DEFAULT_BOARD, "player": p, "created_time": datetime.datetime.now()}
    return id
    

@app.post('/operate/<id:int>')
def operate(id: int):
    op = request.json['op']
    games[id]["board"] = game.validate(games[id]["board"], games[id]["player"], op)
    # AI下一步棋
    
    return games[id]["board"]


@app.get('/board/<id:int>')
def board(id: int):
    return games[id]["board"]


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8060, debug=True)
