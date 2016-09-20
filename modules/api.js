'use strict';

const
    express = require('express'),
    router = express.Router();

router.get('/dataset', (req, res) => {
    res.json({message: 'we good'});
});

module.exports = router;