import {Injectable, TemplateRef} from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {TemplateModalComponent} from './template-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private dialog: MatDialog) {
  }

  private static fetchOptions({width, minWidth, minHeight, height, disableClose, panelClass}: DialogOptions):
    Pick<MatDialogConfig<DialogData>, 'width' | 'minWidth' | 'minHeight' | 'height' | 'disableClose' | 'panelClass'> {
    return {
      minWidth: `${minWidth}px`,
      width: width === 'auto' ? `auto` : `${width}px`,
      minHeight: `${minHeight}px`,
      height: height === 'auto' ? `auto` : `${height}px`,
      disableClose,
      panelClass: [panelClass, 'opercoll-popup-panel']
    };
  }

  open(data: DialogData, options: DialogOptions = {
    width: 'auto',
    minWidth: 0,
    height: 'auto',
    minHeight: 0,
    disableClose: true,
    panelClass: 'custom-panel'
  }): MatDialogRef<TemplateModalComponent> {
    return this.dialog.open<TemplateModalComponent, DialogData>(
      TemplateModalComponent,
      {
        ...ModalService.fetchOptions(options),
        data
      }
    );
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
