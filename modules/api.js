'use strict';

const
    express = require('express'),
    redis = require('../modules/redis'),
    { prefix } = require('../config').redis,
    router = express.Router();

router.get('/dataset', (req, res) => {
    redis.lrange(`${prefix}dataset`, 0, -1, (err, sample_ids) =>
        res.json(sample_ids));
});

module.exports = router;