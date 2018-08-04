const Tank = require('./libs/tank');
const {ENEMY_TYPE, TANK_SPEED} = require('./constants/game')

const _players = new Map();

exports.join = (id, player = {}) => {
    console.log('Joined.', id)

    const tank = new Tank(0, 0, TANK_SPEED, ENEMY_TYPE, id)

    _players.set(id, player)
}

exports.left = (id) => {
    console.log('Left.', id)
    _players.get(id) && _players.delete(id)
}
