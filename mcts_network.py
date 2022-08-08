import numpy as np
import copy


"""for MCTS with a policy-value network"""


class TreeNode:
    def __init__(self, parent, prior_p):
        self._parent = parent  # parent node
        self._children = {}  # children nodes --> key: action item: children node
        self._n_visits = 0  # quantity of visits
        self._Q = 0  # quality
        self._u = 0  # UCB
        self._P = prior_p  # probability in MCTS._policy()

    def get_value(self, c_puct):
        """c_puct: a number in (0, inf) for bias.
        """
        self._u = (c_puct * self._P *
                   np.sqrt(self._parent._n_visits) / (1 + self._n_visits))
        return self._Q + self._u

    def select(self, c_puct):
        return max(self._children.items(),
                   key=lambda node: node[1].get_value(c_puct))

    def expand(self, action_priors):
        for action, prob in action_priors:
            if action not in self._children:
                self._children[action] = TreeNode(self, prob)

    def update(self, leaf_value):
        self._n_visits += 1
        self._Q += leaf_value - self._Q / self._n_visits
        # _Q = sum(leaf_values) / _n_visits

    # fathers update
    def update_recursive(self, leaf_value):
        self.update(leaf_value)
        if self._parent:
            self._parent.update_recursive(-leaf_value)  # "-" for opponent

    def is_leaf(self):
        """Check if leaf node (i.e. no nodes below this have been expanded).
        """
        return self._children == {}

    def is_root(self):
        return self._parent is None


class MCTS(object):
    """implementation of MCTS"""

    def __init__(self, policy_value_fn, c_puct=5, n_playout=500):
        """
        policy_value_fn: a function that takes in a board state and outputs
            a list of (action, probability) tuples and also a score in [-1, 1]
            (i.e. the expected value of the end game score from the current
            player's perspective).
        c_puct: a number in (0, inf) for bias. A higher value means relying
            on the prior more.
        """
        self._root = TreeNode(None, 1.0)  # init root
        self._policy = policy_value_fn
        self._c_puct = c_puct  # bias for TreeNode.get_value
        self._n_playout = n_playout  # playout times

    def _playout(self, state):
        node = self._root

        # ===select=====
        while True:
            if node.is_leaf():
                break
            # select a children based on max(Q+u)
            action, node = node.select(self._c_puct)
            state.move(action)

        # ===Evaluate===
        action_probs, _ = self._policy(state)

        # ===expand=====
        end, winner = state.game_end()
        if not end:
            node.expand(action_probs)

        # Evaluate the leaf node by random rollout
        leaf_value = self._evaluate_rollout(state)

        # update fathers
        node.update_recursive(-leaf_value)

    def _evaluate_rollout(self, state, limit=1000):  # limit
        """Use the rollout policy to play until the end of the game,
        returning +1 if the current player wins, -1 if the opponent wins,
        and 0 if it is a tie.
        """
        player = state.get_current_player()
        for i in range(limit):
            end, winner = state.game_end()
            if end:
                break
            action_probs = rollout_policy_fn(state)
            max_action = max(action_probs, key=itemgetter(1))[0]
            state.do_move(max_action)
        else:
            # If no break from the loop, issue a warning.
            print("WARNING: rollout reached move limit")
        if winner == -1:  # tie
            return 0
        else:
            return 1 if winner == player else -1

    def get_move(self, state):
        """state: the current game state Return: the selected action"""
        for n in range(self._n_playout):
            state_copy = copy.deepcopy(state)
            self._playout(state_copy)
        return max(self._root._children.items(),
                   key=lambda act_node: act_node[1]._n_visits)[0]

    def update_with_move(self, last_move):
        if last_move in self._root._children:
            self._root = self._root._children[last_move]
            self._root._parent = None
        else:
            self._root = TreeNode(None, 1.0)


class MCTSPlayer(object):
    """AI player based on MCTS"""

    def __init__(self, c_puct=5, n_playout=2000, p='MCTS-AI'):
        self.player = p
        self.mcts = MCTS(policy_value_fn, c_puct, n_playout)

    def reset_player(self):
        self.mcts.update_with_move(-1)

    def get_action(self, board):
        sensible_moves = board.availables
        if len(sensible_moves) > 0:
            move = self.mcts.get_move(board)
            self.mcts.update_with_move(-1)
            return move
        else:
            print("WARNING: the board is full")
