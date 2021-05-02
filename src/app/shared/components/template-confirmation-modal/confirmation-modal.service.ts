import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {TemplateConfirmationModalComponent} from './template-confirmation-modal.component';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationModalService {

  constructor(private dialog: MatDialog) {
  }

  public confirmationPopup(title: string, message?: string,
                           width: number | 'auto' = 400, height: number | 'auto' = 'auto'): Observable<boolean> {
    let dialogRef: MatDialogRef<TemplateConfirmationModalComponent>;
    dialogRef = this.dialog.open(TemplateConfirmationModalComponent, {
      disableClose: true,
      width: width === 'auto' ? width : `${width}px`,
      height: height === 'auto' ? height : `${height}px`,
      autoFocus: false,
      panelClass: 'template-confirmation-modal-panel'
    });
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message && message;
    return dialogRef.afterClosed();
  }

}

export interface DialogData {
  template?: TemplateRef<any>;
  component?: any;
  title?: string;
  hideCloseButton?: boolean;
  attributes?: any;
}

export interface DialogOptions {
  width?: number | string;
  minWidth?: number | string;
  minHeight?: number | string;
  height?: number | string;
  disableClose?: boolean;
  panelClass?: string;
}
