import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Uris } from './uris';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${Uris.people}`);
  }
  addNew(value: any) {
    return this.http.post(`${Uris.addPeople}`, value);
  }
  getbyId(id: any) {
    return this.http.get(`${Uris.getpeopleById}${id}`);
  }
  edit(id: any, value: any) {
    return this.http.put(`${Uris.editPeople}datadestiny/${id}`, value);
  }
}
