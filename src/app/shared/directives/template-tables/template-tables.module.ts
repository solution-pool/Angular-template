import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateHeaderRowDirective} from './template-header-row.directive';
import {TemplateCellDirective} from './template-cell.directive';


@NgModule({
  declarations: [TemplateHeaderRowDirective, TemplateCellDirective],
  exports: [
    TemplateHeaderRowDirective,
    TemplateCellDirective
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateTablesModule {
}
