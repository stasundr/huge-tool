'use strict';

// Application wide ->
    import 'babel-polyfill';
    import fetch from 'isomorphic-fetch';
    import { call, put } from 'redux-saga/effects';
    import { takeEvery } from 'redux-saga';
    import _c from '../consts';

    // Dataset
    function fetchDataset() {
        return fetch('/api/v1/dataset')
            .then(response => response.json());
    }

    function* asyncDatasetFetch() {
        const payload = yield call(fetchDataset);
        const sample_ids = payload.sample_ids;

        if (sample_ids) {
            for (let i = 0; i < sample_ids.length; i++) {
                // what if there are 10k sample ids? mb queue here?
                yield put({ type: _c.SAMPLE_FETCH_REQUESTED, payload: { sample_id: sample_ids[i] } });
            }
        }

        yield put({ type: _c.DATASET_FETCH_SUCCEEDED, payload });
    }

    function* watchDataset() {
        yield* takeEvery(_c.DATASET_FETCH_REQUESTED, asyncDatasetFetch);
    }

    // Sample
    function fetchSample(sample_id) {
        return fetch(`/api/v1/sample/${sample_id}`)
            .then(response => response.json());
    }

    function* asyncSampleFetch(action) {
        const payload = yield call(fetchSample, action.payload.sample_id);

        yield put({ type: _c.SAMPLE_FETCH_SUCCEEDED, payload });
    }

    function* watchSamples() {
        yield* takeEvery(_c.SAMPLE_FETCH_REQUESTED, asyncSampleFetch);
    }
// <- Application wide

// Sagas watcher
function* rootSaga() {
    yield [
        watchDataset(),
        watchSamples()
    ];
}

export default rootSaga;