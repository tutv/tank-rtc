const players = {}

exports.join = (id, player = {}) => {
    console.log('A new player has just joined.', id);

    players[id] = player;
}

exports.left = (id) => {
    console.log('A new player has just left.', id);

    players[id] && delete players[id]
}

setInterval(() => {
    console.log('Players:', Object.keys(players).length);
}, 5000);