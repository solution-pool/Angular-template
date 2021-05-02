import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastData} from './template-toast-config';
import {ToastRef} from './template-toast-ref';
import {templateToastAnimations} from './template-toast-animation';

@Component({
  selector: 'app-template-toast',
  templateUrl: './template-toast.component.html',
  styleUrls: ['./template-toast.component.scss'],
  animations: [templateToastAnimations.fadeToast],
})
export class TemplateToastComponent implements OnInit, OnDestroy {
  show = true;
  private intervalId: number;

  constructor(readonly data: ToastData, readonly ref: ToastRef) {
  }

  ngOnInit() {
    this.intervalId = window.setTimeout(() => {
      this.show = false;
    }, 3000);
  }

  onAnimationDone(event) {
    if (event.toState === 'void' && !this.show) {
      this.ref.close();
    }
  }

  ngOnDestroy() {
    clearTimeout(this.intervalId);
  }
}
