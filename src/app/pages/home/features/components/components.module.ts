import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComponentsComponent} from './components.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'buttons',
        loadChildren: () => import('./buttons/buttons.module.js').then(m => m.ButtonsModule)
      },
      {
        path: 'sliders',
        loadChildren: () => import('./sliders/sliders.module.js').then(m => m.SlidersModule)
      },
      {
        path: 'switches-&-tabs',
        loadChildren: () => import('./switches-&-tabs/switches-&-tabs.module.js').then(m => m.SwitchesTabsModule)
      },
      {
        path: 'modals',
        loadChildren: () => import('./modals/modals.module.js').then(m => m.ModalsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module.js').then(m => m.NotificationsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./tables/tables.module.js').then(m => m.TablesModule)
      }
    ]
  }
];

@NgModule({
  declarations: [ComponentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    FlexModule
  ]
})
export class ComponentsModule {
}
