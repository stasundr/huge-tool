// Run this script to add sample data to your redis storage

'use strict';

const async = require('async');
const redis = require('./modules/redis');
const { prefix } = require('./config').redis;

const setSample = (sample) => {
    const key = `${prefix}sample:${sample.id}`;

    return redis.multi()
        .set(key, JSON.stringify(sample))
        .rpush(`${prefix}dataset`, key)
        .execAsync();
};
const queue = async.queue((sample, callback) => setSample(sample).then(callback));
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
        lng: '26.983611111'
    },

    {
        id: 'I2181',
        sex: 'M',
        lat: '43.05777778',
        lng: '26.983611111'
    },

    {
        id: 'I2189',
        sex: 'M',
        lat: '32.58472222',
        lng: '35.01694444'
    },

    {
        id: 'I2190',
        sex: 'M',
        lat: '32.58472222',
        lng: '35.01694444'
    },

    {
        id: 'I2191',
        sex: 'M',
        lat: '..',
        lng: '..'
    },

    {
        id: 'I2195',
        sex: 'M',
        lat: '32.58472222',
        lng: '35.01694444'
    },

    {
        id: 'I2198',
        sex: 'M',
        lat: '32.58472222',
        lng: '35.01694444'
    }
];

redis.del(`${prefix}dataset`, err => {
    queue.push(samples, err => {});
    queue.drain = () => {
        redis.quit();
        console.log('Done!');
    };
});