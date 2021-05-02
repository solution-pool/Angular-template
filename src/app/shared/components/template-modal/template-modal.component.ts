import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-template-modal',
  templateUrl: './template-modal.component.html',
  styleUrls: ['./template-modal.component.scss']
})
export class TemplateModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TemplateModalComponent>, @Inject(MAT_DIALOG_DATA) public data) {
  }

  ngOnInit(): void {
  }

}
