import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SchtroumpfsService {
  url = 'http://localhost:8000/schtroumpf/';
  loginUrl = 'http://localhost:8000/auth/login';
  registerUrl = 'http://localhost:8000/auth/register';
  constructor(private http: HttpClient, private auth: AuthService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `JWT ${this.auth.getToken()}`
    })
  };

  getSchtroumpfs() {
    return this.http.get(this.url, this.httpOptions);
  }

  addSchtroumpf(value: any){
    const body = {
      name: value.name,
      email: value.email,
      race: value.race,
      famille: value.famille,
      nourriture: value.nourriture,
      age: value.age,
      adresse: value.adresse,
    };
    return this.http.post(this.url, body, this.httpOptions);
}

  deleteSchtroumpf(id) {
    return this.http.delete(this.url + id);
  }

  updateSchtroumpf(id, value) {
    const body = {
      name: value.name,
      email: value.email,
      race: value.race,
      famille: value.famille,
      nourriture: value.nourriture,
      age: value.age,
      adresse: value.adresse,
    };
    return this.http.put(this.url + id, body);
  }

  getSchtroumpfwithID(id) {
    // @ts-ignore
    return this.http.put(this.url + id);
  }

login(payload: any) {
    return this.http.post(this.loginUrl, payload);
}

  register(payload: any) {
    return this.http.post(this.registerUrl, payload);
  }
}
