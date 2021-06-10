import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuService } from '../core/menu/menu.service';
import { LayoutComponent } from '../layout/layout.component';
import { SidebarComponent } from '../layout/sidebar/sidebar.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { routes } from './routes';

@NgModule({
  declarations: [LayoutComponent, SidebarComponent, NavbarComponent],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutesModule {
  constructor(public MenuService: MenuService) {}
}
