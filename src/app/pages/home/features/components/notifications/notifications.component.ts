import {Component, OnInit} from '@angular/core';
import {TemplateToastService} from '../../../../../shared/components/template-toast/template-toast.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  constructor(private templateToastService: TemplateToastService) {
  }

  ngOnInit(): void {
  }

  onClick(type: 'warning' | 'error' | 'success' | 'info') {
    this.templateToastService.show({type, text: `this is a ${type} message`});
  }

}
