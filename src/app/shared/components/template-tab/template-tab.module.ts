import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateTabComponent} from './template-tab.component';

@NgModule({
  declarations: [TemplateTabComponent],
  exports: [
    TemplateTabComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateTabModule {
}
