import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./features/dashboard/dashboard.module.js').then(m => m.DashboardModule)
      },
      {
        path: 'components',
        loadChildren: () => import('./features/components/components.module.js').then(m => m.ComponentsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./features/charts/charts.module.js').then(m => m.ChartsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
