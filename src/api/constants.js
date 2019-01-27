const ENDPOINT = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8000/' : 'http://3.120.148.173/';
export const TOKEN = 'token';
export const SEARCH_URL = `${ENDPOINT}places/?q=`;
