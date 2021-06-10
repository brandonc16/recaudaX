import { Injectable } from '@angular/core';
import { Uris } from './uris';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  token: any;
  constructor(private http: HttpClient, private route: Router) {}

  singin(loginData: any) {
    return this.http.post<any>(`${Uris.login}`, loginData).pipe(
      map((resp: any) => {
        if (resp.error) {
        } else {
          localStorage.setItem('token', resp.token);
        }
        return resp;
      })
    );
  }
  singout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
  }
}
