import { Token } from './token';
import { SEARCH_URL } from './constants';
import { ApiBase } from './apiBase';

export class Api extends ApiBase {
    token = new Token();

    search(query, admin_level = 8) {
        return this.get(`${SEARCH_URL}${query}&admin_level=${admin_level}`);
    }
}
