import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  storageKey = 'schtroumpfs-jwt';
  constructor() {}
  public token;
  public log = false;

  setToken(token: any) {
    localStorage.setItem(this.storageKey, token);
    this.token = token;
  }

getToken() {
    // return this.token;
    return localStorage.getItem(this.storageKey);
}

isLoggedIn() {
   return this.token !== undefined;
}

logout() {
    localStorage.removeItem(this.storageKey);
}

}
