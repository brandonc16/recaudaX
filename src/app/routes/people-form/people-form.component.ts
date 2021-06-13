import { Component, OnInit } from '@angular/core';
import { SwalService } from '../../services/swal.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.scss'],
})
export class PeopleFormComponent implements OnInit {
  peopleForm: FormGroup;
  id: any;
  constructor(
    public swal: SwalService,
    public route: ActivatedRoute,
    public people: PeopleService
  ) {
    this.peopleForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      Password: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id;
    if (id === 'crear ') {
    } else {
      this.swal.successPetition('Cargando', 'none');
      this.people.getbyId(id).subscribe((resp: any) => {
        this.peopleForm.patchValue({
          name: resp.name,
          age: resp.age,
          sex: resp.sex,
        });
      });
    }
  }

  crear(value: any) {
    if (this.id === 'crear') {
      this.swal.loading();
      this.people.addNew(value).subscribe(
        (resp: any) => {
          console.log('este es el resp', resp);
          this.swal.successPetition('Registrado Correctamente', '/people');
        },
        (err) => {
          this.swal.errorPetition(err.error.error);
        }
      );
    } else {
      this.people.edit(this.id, value).subscribe((resp: any) => {
        this.swal.successPetition('Editado correctamente', '/people');
      });
    }
  }
}
