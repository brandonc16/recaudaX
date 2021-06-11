import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { SwalService } from 'src/app/services/swal.service';
import { Auth } from '../../../services/auth.service';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss'],
})
export class SinginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(public authService: Auth, public SwalService: SwalService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  login(value) {
    this.SwalService.loading();
    this.authService.singin(value).subscribe((resp: any) => {
      if (resp.error) {
        console.log('dentro', resp),
          this.SwalService.errorPetition(
            'Correo electrónico o contraseña incorrectos'
          );
      } else {
        this.SwalService.successPetition('Bienvenido/a', '/people');
      }
    });
  }
}
