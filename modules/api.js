'use strict';

const
    express = require('express'),
    bodyParser = require('body-parser'),
    library = require('../modules/library'),
    redis = require('../modules/redis'),
    { prefix } = require('../config').redis,
    router = express.Router();

router.get('/dataset', (req, res) => {
    redis.lrange(`${prefix}dataset`, 0, -1, (err, sample_ids) =>
        res.json({ sample_ids })
    );
});

router.get('/sample/:sample_id', (req, res) => {
    redis.get(req.params.sample_id, (err, data) =>
        res.json(JSON.parse(data))
    );
});

router.post('/export', bodyParser.json(), (req, res) => {
    const state = JSON.stringify(req.body);
    const token = library.genToken(state);

    redis.setAsync(`${prefix}state:${token}`, state).then(redis_res => {
        if (redis_res == 'OK') res.json({ token });
        else res.json({ error: 'VSE OCHE PLOHO' });
    });
});

router.get('/import/:token', (req, res) => {
    redis.getAsync(`${prefix}state:${req.params.token}`)
        .then(data => res.json(JSON.parse(data)));
});

module.exports = router;