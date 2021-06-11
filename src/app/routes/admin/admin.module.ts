import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin.component';

const routes: Routes = [{ path: '', component: AdminComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), HttpClientModule],
  declarations: [AdminComponent],
  exports: [RouterModule],
})
export class AdminModule {}
