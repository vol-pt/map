import { delay } from 'redux-saga';
import { call } from 'redux-saga/effects';

export function* wait(clock, expectedWait) {
    const delta = new Date() - clock;
    if (delta < expectedWait) {
        yield call(delay, expectedWait - delta);
    }
}
