import { SEARCH_REQUEST, SEARCH_SUCCESS, SET_CURRENT_POLY } from './constants';

export const doSearchRequest = (query = '', admin_level) => ({ type: SEARCH_REQUEST, query, admin_level });
export const doSearchSuccess = results => ({ type: SEARCH_SUCCESS, results });
export const doSetPoly = results => ({ type: SET_CURRENT_POLY, results });
export const doResetSearchReducer = () => ({ type: 'RESET_searchReducer' });
