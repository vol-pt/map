import { combineReducers } from 'redux';
import { searchReducer } from './features/search';
import { connectRouter } from 'connected-react-router';

export default history => (state, action) => {
    if (action.type.startsWith('RESET_')) {
        state[`${action.type.slice(6)}`] = undefined;
    }
    return combineReducers({
        router: connectRouter(history),
        searchReducer,
    })(state, action);
};
