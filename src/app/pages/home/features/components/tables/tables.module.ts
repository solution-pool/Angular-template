import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TablesComponent} from './tables.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {TemplateTablesModule} from '../../../../../shared/directives/template-tables/template-tables.module';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: TablesComponent,
  }
];

@NgModule({
  declarations: [TablesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatTableModule,
    TemplateTablesModule,
    NgxPaginationModule
  ]
})
export class TablesModule {
}
