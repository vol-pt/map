import { call, put, takeEvery } from 'redux-saga/effects';
import { NOTIFICATION_SHOW } from './constants';
import { doHideNotification } from './action_creators';
import { delay } from 'redux-saga';

function* notificationWorker(action) {
    yield call(delay, action.timeout);
    yield put(doHideNotification(action.id));
}

function* notificationWatcher() {
    yield takeEvery(NOTIFICATION_SHOW, notificationWorker);
}

export default [notificationWatcher];
