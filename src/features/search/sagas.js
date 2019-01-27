import { call, put, takeLatest } from 'redux-saga/effects';
import { SEARCH_REQUEST } from './constants';
import API from '../../api';
import { doSearchSuccess } from './action_creators';
import { delay } from 'redux-saga';
import { doShowErrorNotification } from '../notifications/action_creators';

function* searchWorker(action) {
    yield call(delay, 1000);
    try {
        const results = action.query ? yield call([API, 'search'], action.query, action.admin_level) : [];
        yield put(doSearchSuccess(results));
    } catch (e) {
        yield put(doShowErrorNotification('Error occurred while fetching search results.'));
    }
}

function* searchWatcher() {
    yield takeLatest(SEARCH_REQUEST, searchWorker);
}

export default [searchWatcher];
