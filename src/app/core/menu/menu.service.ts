import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menuItems: Array<any>;

  constructor() {
    this.menuItems = [];
  }

  addMenu(
    items: Array<{
      text: string;
      heading?: boolean;
      link?: string; // internal route links
      elink?: string; // used only for external links
      target?: string; // anchor target="_blank|_self|_parent|_top|framename"
      icon?: string;
      alert?: string;
      submenu?: Array<any>;
    }>
  ) {}
  push(value: any) {
    this.menuItems = value;
  }

  getMenu() {
    return this.menuItems;
  }
}
