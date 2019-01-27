import { all, fork } from 'redux-saga/effects';
import { searchSagas } from './features/search';
import { notificationSagas } from './features/notifications';

export default function*() {
    const sagas = [...searchSagas, ...notificationSagas];
    yield all(sagas.map(saga => fork(saga)));
}
