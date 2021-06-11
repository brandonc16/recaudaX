import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PeopleFormComponent } from './people-form.component';

const routes: Routes = [{ path: '', component: PeopleFormComponent }];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HttpClientModule,
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [PeopleFormComponent],
  exports: [RouterModule],
})
export class PeopleFormModule {}
