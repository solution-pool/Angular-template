import {Injectable} from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
  }

  saveToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
  }

  saveRefreshToken(token) {
    localStorage.setItem('refresh', token);
  }

  getRefreshToken() {
    return localStorage.getItem('refresh');
  }

  clearRefreshToken() {
    localStorage.removeItem('refresh');
  }
}
