const swarm = require('./swarm');
const Players = require('./players');

swarm.on('connect', (peer, id) => {
    console.log('connected');

    Players.join(id);
});

swarm.on('disconnect', (peer, id) => {
    console.log('disconnected');

    Players.left(id);
})

