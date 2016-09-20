'use strict';

// Application wide ->
    import 'babel-polyfill';
    import fetch from 'isomorphic-fetch';
    import { call, put } from 'redux-saga/effects';
    import { takeEvery } from 'redux-saga';
    import _c from '../consts';

    function fetchDataset() {
        return fetch('/api/v1/dataset')
            .then(response => response.json());
    }

    function* asyncDatasetFetch() {
        const sample_ids = yield call(fetchDataset);
        yield put({ type: _c.DATASET_FETCH_SUCCEEDED, sample_ids });
    }

    function* watchDataset() {
        yield* takeEvery(_c.DATASET_FETCH_REQUESTED, asyncDatasetFetch);
    }
// <- Application wide

// Sagas watcher
function* rootSaga() {
    yield [
        watchDataset()
    ];
}

export default rootSaga;