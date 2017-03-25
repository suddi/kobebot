'use strict';

const Interface = require('./interface');

function whoami(req, res) {
    return Interface.respond(this, 200);
}

function sendWoof(session) {
    return session
        .send('woof')
        .endDialog();
}

module.exports = {
    whoami: whoami,
    sendWoof: sendWoof
};
