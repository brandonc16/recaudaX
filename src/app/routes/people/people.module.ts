import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people.component';

const routes: Routes = [{ path: '', component: PeopleComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [PeopleComponent],
  exports: [RouterModule],
})
export class PeopleModule {}
