const signalhub = require('signalhub')
const WebRTCSwarm = require('webrtc-swarm')

const hub = signalhub('tank-rtc', [
    'http://localhost:3459'
])

const swarm = WebRTCSwarm(hub);

swarm.on('connect', (peer, id) => {
    console.log('connected');

    swarm.peers.forEach(_peer => {
        console.log(_peer);
    });
});

swarm.on('disconnect', (peer, id) => {
    console.log('disconnected');
})

require('./libs/game-play')