import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalsComponent} from './modals.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: ModalsComponent,
  }
];

@NgModule({
  declarations: [ModalsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatButtonModule
  ]
})
export class ModalsModule {
}
