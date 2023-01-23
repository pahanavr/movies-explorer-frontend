import { moviesApiUrl } from './constants';

class MoviesApi {
  _baseUrl: any;
  _headers: any;
  constructor(options: any) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res: any) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      method: 'GET',
      headers: this._headers,
    }).then(this._checkResponse);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: moviesApiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default moviesApi;