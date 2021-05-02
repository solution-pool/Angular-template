import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {TemplateConfirmationModalComponent} from './template-confirmation-modal.component';
import {FlexModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [TemplateConfirmationModalComponent],
  exports: [
    MatDialogModule,
    TemplateConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    FlexModule
  ]
})
export class TemplateConfirmationModalModule {
}
