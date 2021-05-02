import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'chartsjs',
    loadChildren: () => import('./chartsjs/chartsjs.module.js').then(m => m.ChartsjsModule)
  },
  {
    path: 'ngx-charts',
    loadChildren: () => import('./ngx-charts/ngx-charts.module.js').then(m => m.NgxChartsModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ChartsModule {
}
