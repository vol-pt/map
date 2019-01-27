import { TOKEN } from './constants';

export class Token {
    obtainToken() {
        return new Promise(resolve => {
            return resolve(localStorage.getItem(TOKEN));
        });
    }

    removeToken() {
        return new Promise(resolve => {
            return resolve(localStorage.removeItem(TOKEN));
        });
    }

    setToken(value) {
        return new Promise(resolve => {
            return resolve(localStorage.setItem(TOKEN, value));
        });
    }
}
