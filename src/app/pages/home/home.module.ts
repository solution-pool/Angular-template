import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {HomeComponent} from './home.component';
import {FlexModule} from '@angular/flex-layout';
import {HomeToolbarComponent} from './home-toolbar/home-toolbar.component';
import {HomeFooterComponent} from './home-footer/home-footer.component';
import {AvatarModule} from 'ngx-avatar';
import {HomeSidebarOptionsComponent} from './home-sidebar/home-sidebar-options/home-sidebar-options.component';
import {SimplebarAngularModule} from 'simplebar-angular';
import {HomeSidebarComponent} from './home-sidebar/home-sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {HomeSidebarHeaderComponent} from './home-sidebar/home-sidebar-header/home-sidebar-header.component';
import {HomeRoutingModule} from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    HomeSidebarComponent, HomeSidebarHeaderComponent, HomeSidebarOptionsComponent,
    HomeToolbarComponent,
    HomeFooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    AvatarModule,
    FlexModule,
    MatDividerModule,
    FlexModule,
    MatIconModule,
    SimplebarAngularModule
  ]
})
export class HomeModule {
}
