import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationsComponent} from './notifications.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
  }
];

@NgModule({
  declarations: [NotificationsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatButtonModule,
  ]
})
export class NotificationsModule {
}
