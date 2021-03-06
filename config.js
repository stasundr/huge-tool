'use strict';

const config = {
    port: 3000,

    redis: {
        host: 'localhost',
        port: 6379,
        auth: false,
        prefix: 'huge:'
    }
};

module.exports = config;