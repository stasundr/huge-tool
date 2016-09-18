#!/usr/bin/env node

'use strict';

const
    express = require('express'),
    logger = require('morgan'),
    api = require('./modules/api'),
    {port} = require('./config'),
    server = express();

server
    .use(logger('dev'))
    .use(express.static('public'))
    .use('/api/v1', api)
    .get('/', (req, res) => res.render('index'))
    .listen(port, () => console.log(`Listening on port ${port}`));