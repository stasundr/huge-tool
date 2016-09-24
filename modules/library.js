'use strict';

const crypto = require('crypto');
const config = require('../config');

function genToken(state) {
    const hmac = new crypto.createHmac('sha256', config.SECRET);
    hmac.update(state + Date.now());

    return hmac.digest('hex');
}

module.exports.genToken = genToken;