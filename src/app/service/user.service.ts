import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  listUsers() {
    return this.http.get<User[]>(this.url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getUser(id: number): Observable<User> {
    const url = `${this.url}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, user)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteUser (id: number): Observable<{}> {
    return this.http.delete(this.getUserUrl(id))
      .pipe(
        catchError(this.handleError)
      );
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.getUserUrl(user.id), user)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private getUserUrl(id: number) {
    return `${this.url}/${id}`;
  }
}
