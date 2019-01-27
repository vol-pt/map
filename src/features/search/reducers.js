import { SEARCH_REQUEST, SEARCH_SUCCESS, SET_CURRENT_POLY } from './constants';
import { states } from '../../pages/data';

const initialState = {
    results: null,
    isLoading: false,
    opened: false,
    currentPoly: states,
};

export function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, isLoading: true };
        case SEARCH_SUCCESS:
            return { ...state, results: action.results, isLoading: false, opened: true };
        case SET_CURRENT_POLY:
            const poly = {
                type: 'Feature',
                properties: { party: 'Democrat' },
                geometry: action.results.way,
            };
            return { ...state, currentPoly: poly };
        default:
            return state;
    }
}
