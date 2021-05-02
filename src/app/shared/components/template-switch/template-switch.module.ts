import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateSwitchComponent} from './template-switch.component';


@NgModule({
  declarations: [TemplateSwitchComponent],
  exports: [
    TemplateSwitchComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TemplateSwitchModule {
}
