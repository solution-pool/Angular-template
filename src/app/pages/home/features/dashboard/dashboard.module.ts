import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {SharedModule} from '../../../../shared/shared.module';
import {InformationCardComponent} from './information-card/information-card.component';
import {ChartsModule} from 'ng2-charts';
import {SimplebarAngularModule} from 'simplebar-angular';
import {TemplateTablesModule} from '../../../../shared/directives/template-tables/template-tables.module';
import {TasksCardComponent} from './tasks-card/tasks-card.component';
import {TableCardComponent} from './table-card/table-card.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  declarations: [DashboardComponent, InformationCardComponent, TasksCardComponent, TableCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    SharedModule,
    ChartsModule,
    SimplebarAngularModule,
    TemplateTablesModule
  ]
})
export class DashboardModule {
}
