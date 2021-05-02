import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TemplateSliderComponent} from './template-slider.component';
import {MatSliderModule} from '@angular/material/slider';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
  declarations: [TemplateSliderComponent],
  exports: [
    TemplateSliderComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    FlexModule
  ]
})
export class TemplateSliderModule {
}
