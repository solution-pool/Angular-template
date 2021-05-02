import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-template-confirmation-modal',
  templateUrl: './template-confirmation-modal.component.html',
  styleUrls: ['./template-confirmation-modal.component.scss']
})
export class TemplateConfirmationModalComponent implements OnInit {
  title: string;
  message: string;

  constructor(public modal: MatDialogRef<TemplateConfirmationModalComponent>) {
  }

  ngOnInit(): void {
  }

}
