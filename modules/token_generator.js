'use strict';

const crypto = require('crypto');
const config = require('../config');

/**
 * Generate Token Module
 * @param state
 * @returns {token}
 */
module.exports = (state) => {
    return new crypto.createHmac('sha256', config.secret)
        .update(state + Date.now())
        .digest('hex');
};