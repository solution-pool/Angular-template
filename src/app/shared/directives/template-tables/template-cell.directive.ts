import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[templateCell]'
})
export class TemplateCellDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'fontSize', '1rem');
    this.renderer.setStyle(this.el.nativeElement, 'display', 'inline');
    this.renderer.setStyle(this.el.nativeElement, 'justifyContent', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'textAlign', 'center');
    this.renderer.setStyle(this.el.nativeElement, 'whiteSpace', 'nowrap');
    this.renderer.setStyle(this.el.nativeElement, 'overflow', 'hidden');
    this.renderer.setStyle(this.el.nativeElement, 'textOverflow', 'ellipsis');
    this.renderer.setStyle(this.el.nativeElement, 'min-height', '0');
  }

}
