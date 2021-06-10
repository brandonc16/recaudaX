import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SwalService {
  constructor(public router: Router) {}

  loading() {
    Swal.fire({
      text: 'Guardar información',
      allowOutsideClick: false,
      width: '270px',
    });
    Swal.showLoading();
  }
  successPetition(value, route) {
    Swal.fire({
      text: value,
      icon: 'success',
      showConfirmButton: false,
      timer: 1500,
      width: '250px',
    });
    if (route !== 'none') {
      this.router.navigateByUrl(route);
    }
  }
  errorPetition(error) {
    Swal.fire({
      text: error,
      showConfirmButton: false,
      timer: 1500,
      icon: 'error',
      width: '250px',
    });
  }
  closed() {
    Swal.close();
  }
}
