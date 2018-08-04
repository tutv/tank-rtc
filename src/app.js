const swarm = require('./swarm');
const Players = require('./players');

if (!swarm.isSupport()) {
    return alert('Your browser is not support WebRTC');
}

const uuid = require('uuid/v4')
const myId = uuid()
const Game = require('./game')

//join now
Players.join(myId)
Game.gameStart()

const sw = swarm.createSwarm({
    uuid: myId
});

sw.on('connect', (peer, id) => {
    console.log('connected')

    peer.on('data', (data) => {
        const object = JSON.parse(data)

        console.log(object)
    })

    Players.join(id)
});

sw.on('disconnect', (peer, id) => {
    console.log('disconnected')
    Players.left(id)
})

