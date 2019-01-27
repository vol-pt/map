import { TOKEN } from './constants';

export class ApiBase {
    buildHeaders() {
        const headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return headers;
    }

    buildRequest(url, method, body = null, withCredentials = true) {
        const headers = this.buildHeaders();
        if (withCredentials) {
            const token = localStorage.getItem(TOKEN);
            headers.append('Authorization', `Bearer ${token}`);
        }
        const config = { method: method, headers: headers, mode: 'cors' };
        if (body) {
            config['body'] = JSON.stringify(body);
        }
        return new Request(url, config);
    }

    get(url, widthCredentials = false) {
        return fetch(this.buildRequest(url, 'GET', undefined, widthCredentials));
    }

    post(url, body, widthCredentials) {
        return fetch(this.buildRequest(url, 'POST', body, widthCredentials));
    }

    delete(url, widthCredentials) {
        return fetch(this.buildRequest(url, 'DELETE', undefined, widthCredentials));
    }

    put(url, body, widthCredentials) {
        return fetch(this.buildRequest(url, 'PUT', body, widthCredentials));
    }
}
