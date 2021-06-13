import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Uris } from './uris';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${Uris.people}`, this.headers());
  }
  addNew(value: any) {
    return this.http.post(`${Uris.addPeople}`, value, this.headers());
  }
  getbyId(id: any) {
    return this.http.get(`${Uris.getpeopleById}${id}`, this.headers());
  }
  edit(id: any, value: any) {
    return this.http.put(
      `${Uris.editPeople}datadestiny/${id}`,
      value,
      this.headers()
    );
  }
  headers() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept-language': 'en-es',
      Authorization: `Bearer ${this.leerToken()}`,
    });
    return { headers: headers };
  }
  leerToken() {
    return localStorage.getItem('token');
  }
}
