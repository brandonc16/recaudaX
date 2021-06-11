import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const routes: Routes = [{ path: '', component: PeopleComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  declarations: [PeopleComponent],
  exports: [RouterModule],
})
export class PeopleModule {}
