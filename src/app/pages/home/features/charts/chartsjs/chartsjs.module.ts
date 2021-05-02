import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChartsjsComponent} from './chartsjs.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {ChartsModule} from 'ng2-charts';

const routes: Routes = [
  {
    path: '',
    component: ChartsjsComponent,
  }
];

@NgModule({
  declarations: [ChartsjsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatCardModule,
    ChartsModule
  ]
})
export class ChartsjsModule {
}
