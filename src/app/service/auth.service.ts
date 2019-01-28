import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUserDetails(username: string, password: string) {
    return this.http
    .post('https://reqres.in/api/login', { username, password })
    .subscribe(result => {
      console.log(result);
    });
  }

}
