import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModalService} from '../../../../../shared/components/template-modal/modal.service';
import {MatDialogRef} from '@angular/material/dialog';
import {ConfirmationModalService} from '../../../../../shared/components/template-confirmation-modal/confirmation-modal.service';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})
export class ModalsComponent implements OnInit {
  @ViewChild('modal') modal: TemplateRef<any>;
  modalRef: MatDialogRef<any>;

  constructor(private modalService: ModalService, private confirmationModalService: ConfirmationModalService) {
  }

  ngOnInit(): void {
  }

  openModal() {
    this.modalRef = this.modalService.open({template: this.modal, hideCloseButton: false, title: 'Modal example'},
      {width: 400, height: 'auto', disableClose: true, panelClass: 'test-modal-panel'});
  }

  openConfirmModal() {
    this.confirmationModalService.confirmationPopup('Confirmation modal', 'Are you sure?').subscribe();
  }
}
