import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlidersComponent} from './sliders.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatSliderModule} from '@angular/material/slider';
import {TemplateSliderModule} from '../../../../../shared/components/template-slider/template-slider.module';

const routes: Routes = [
  {
    path: '',
    component: SlidersComponent,
  }
];

@NgModule({
  declarations: [SlidersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatSliderModule,
    TemplateSliderModule,
  ]
})
export class SlidersModule {
}
