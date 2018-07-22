const signalhub = require('signalhub')
const WebRTCSwarm = require('webrtc-swarm')
const uuid = require('uuid/v4');

const hub = signalhub('tank-rtc', [
    'http://localhost:3459'
])

const swarm = WebRTCSwarm(hub, {
    uuid: uuid(),
});

module.exports = swarm;