import { NOTIFICATION_HIDE, NOTIFICATION_SHOW } from './constants';

export function notificationReducer(state = [], action) {
    switch (action.type) {
        case NOTIFICATION_SHOW:
            return [...state, { id: action.id, text: action.text, kind: action.kind }];
        case NOTIFICATION_HIDE:
            return state.filter(notification => notification.id !== action.id);
        default:
            return state;
    }
}
