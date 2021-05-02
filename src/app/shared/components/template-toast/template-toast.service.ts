import {Injectable, Injector} from '@angular/core';
import {Overlay} from '@angular/cdk/overlay';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {ToastData} from './template-toast-config';
import {ToastRef} from './template-toast-ref';
import {TemplateToastComponent} from './template-toast.component';

const LEFT_POSITION = 16;
const TOP_POSITION = 16;

@Injectable()
export class TemplateToastService {
  private lastToast: ToastRef;

  constructor(private overlay: Overlay, private parentInjector: Injector) {
  }

  show(data: ToastData) {
    const positionStrategy = this.getPositionStrategy();
    const overlayRef = this.overlay.create({positionStrategy});
    const toastRef = new ToastRef(overlayRef);
    this.lastToast = toastRef;
    const injector = this.getInjector(data, toastRef, this.parentInjector);
    const toastPortal = new ComponentPortal(TemplateToastComponent, null, injector);
    overlayRef.attach(toastPortal);
    return toastRef;
  }

  getPositionStrategy() {
    return this.overlay.position()
      .global()
      .top(`${TOP_POSITION}px`)
      .left(`${LEFT_POSITION}px`);
  }

  getInjector(data: ToastData, toastRef: ToastRef, parentInjector: Injector) {
    const tokens = new WeakMap();
    tokens.set(ToastData, data);
    tokens.set(ToastRef, toastRef);
    return new PortalInjector(parentInjector, tokens);
  }
}
