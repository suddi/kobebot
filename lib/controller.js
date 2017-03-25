'use strict';

const Status = require('./enum/status');

function whoami(req, res) {
    const statuses = Status.get();
    res.json(200, {
        meta: statuses[200],
        data: {}
    });
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
