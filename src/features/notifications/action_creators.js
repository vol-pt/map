import uuid from 'uuid/v4';
import { NOTIFICATION_HIDE, NOTIFICATION_SHOW } from './constants';

const doShowNotification = (text, kind, timeout) => ({
    type: NOTIFICATION_SHOW,
    text,
    id: uuid(),
    timeout,
    kind,
});

export const doShowSuccessNotification = (text, timeout = 2000) => doShowNotification(text, 'success', timeout);

export const doShowInfoNotification = (text, timeout = 3000) => doShowNotification(text, 'info', timeout);

export const doShowErrorNotification = (text, timeout = 2500) => doShowNotification(text, 'error', timeout);

export const doHideNotification = id => ({
    type: NOTIFICATION_HIDE,
    id,
});
