import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ThemeService} from '../../../../core/services/theme.service';
import {Menu} from '../../home.component';

@Component({
  selector: 'app-home-sidebar-options',
  templateUrl: './home-sidebar-options.component.html',
  styleUrls: ['./home-sidebar-options.component.scss']
})
export class HomeSidebarOptionsComponent implements OnInit {
  @Input() menus: Menu[];
  activeMenu = 1;
  activeSubmenu = 0;
  openSubmenu = false;
  isDarkTheme: Observable<boolean>;

  constructor(private router: Router, private themeService: ThemeService) {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnInit(): void {
  }

  menuClick(menu: Menu, route?: string) {
    this.openSubmenu = menu.submenus && this.activeMenu === menu.id ? !this.openSubmenu : true;
    this.activeMenu = menu.id;
    if (route) {
      this.router.navigate([route]);
    }
  }

  submenuClick(id: number, route: string) {
    this.activeSubmenu = id;
    this.router.navigate([route]);
  }
}
