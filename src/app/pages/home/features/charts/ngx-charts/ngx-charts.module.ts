import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgxChartsComponent} from './ngx-charts.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import {
  BarChartModule,
  LineChartModule,
  NumberCardModule,
  PieChartModule,
  PolarChartModule
} from '@swimlane/ngx-charts';

const routes: Routes = [
  {
    path: '',
    component: NgxChartsComponent,
  }
];

@NgModule({
  declarations: [NgxChartsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatCardModule,
    BarChartModule,
    PieChartModule,
    LineChartModule,
    PolarChartModule,
    NumberCardModule
  ]
})
export class NgxChartsModule {
}
