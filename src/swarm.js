const signalhub = require('signalhub')
const WebRTCSwarm = require('webrtc-swarm')
const uuid = require('uuid/v4');

const hub = signalhub('tank-rtc', [
    'http://localhost:3459'
])

exports.isSupport = () => {
    return WebRTCSwarm.WEBRTC_SUPPORT;
}

exports.createSwarm = (options) => {
    const defaultOpts = {
        uuid: uuid()
    };

    const optionsComputed = Object.assign({}, defaultOpts, options);
    console.log(optionsComputed);

    return WebRTCSwarm(hub, optionsComputed);
};