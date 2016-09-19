// Run this script to add sample data to your redis storage

'use strict';

const async = require('async');
const redis = require('./modules/redis');
const { prefix } = require('./config').redis;

const queue = async.queue((sample, callback) => callback(sample));
const worker = {
    updateSample: (sample) => {
        return new Promise((fulfill, reject) => {
            redis.set(`${prefix}sample:${sample.id}`, JSON.stringify(sample), err => {
                if (err) reject(err);
                else fulfill(sample)
            })
        });
    },

    addSample: (sample) => {
        worker
            .updateSample(sample)
            .then(sample => queue.push(sample, () => console.log(`Sample ${sample.id} added to redis`)));
    }
};

const samples = [
    {
        id: 'I0518',
        sex: 'M',
        lat: '52.21725278',
        lng: '-0.940216667'
    },

    {
        id: 'I0519',
        sex: 'M',
        lat: '52.21725278',
        lng: '-0.940216667'
    },

    {
        id: 'I0520',
        sex: 'M',
        lat: '52.21725278',
        lng: '-0.940216667'
    },

    {
        id: 'I0525',
        sex: 'F',
        lat: '53.72507222',
        lng: '-0.523011111'
    },

    {
        id: 'I2176',
        sex: 'M',
        lat: '43.05777778',
        lng: '26.98361111'
    }
];
samples.forEach(sample => worker.addSample(sample));

redis.quit();