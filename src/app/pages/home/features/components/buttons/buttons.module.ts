import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsComponent} from './buttons.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: ButtonsComponent,
  }
];

@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class ButtonsModule {
}
