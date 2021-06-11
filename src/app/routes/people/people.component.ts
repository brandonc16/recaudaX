import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  Filter: any = [];
  filterbySex: any;
  constructor(public PeopleService: PeopleService) {}

  ngOnInit(): void {
    this.getlist();
  }
  getlist() {
    this.PeopleService.getAll().subscribe((resp: any) => {
      console.log('done dude !', resp);
      if (resp.erorr) {
      } else {
        this.Filter = resp;
      }
    });
  }
}
