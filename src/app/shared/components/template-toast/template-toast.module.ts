import {NgModule} from '@angular/core';
import {TemplateToastComponent} from './template-toast.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {TemplateToastService} from './template-toast.service';

@NgModule({
  declarations: [TemplateToastComponent],
  imports: [
    CommonModule,
    OverlayModule
  ],
  providers: [
    TemplateToastService
  ]
})
export class TemplateToastModule {
}
