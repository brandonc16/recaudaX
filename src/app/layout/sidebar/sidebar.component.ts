import { MenuService } from '../../core/menu/menu.service';
import { SettingsService } from '../../core/settings/settings.service';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems: Array<any>;
  router!: Router;
  sbclickEvent = 'click.sidebar-toggle';
  $doc: any = null;
  constructor(
    public menu: MenuService,
    public settings: SettingsService,
    public injector: Injector
  ) {
    this.menuItems = menu.getMenu();
  }

  ngOnInit(): void {
    this.router = this.injector.get(Router);

    this.router.events.subscribe((val) => {
      // scroll view to top
      window.scrollTo(0, 0);
      // close sidebar on route change
      this.settings.setLayoutSetting('asideToggled', false);
    });
  }
  ngOnDestroy() {
    if (this.$doc) {
      this.$doc.off(this.sbclickEvent);
    }
  }
}
