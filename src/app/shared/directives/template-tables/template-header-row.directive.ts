import {Directive, ElementRef, Renderer2} from '@angular/core';
import {ThemeService} from '../../../core/services/theme.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[templateHeaderRow]'
})
export class TemplateHeaderRowDirective {

  constructor(private el: ElementRef,
              private renderer: Renderer2,
              private themeService: ThemeService) {
    this.renderer.setStyle(this.el.nativeElement, 'border', 'none');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#F4F4F4');
    this.checkThemeChanges();
  }

  checkThemeChanges() {
    this.themeService.isDarkTheme.subscribe(darkTheme => {
      if (darkTheme) {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#212121');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'background-color', '#F4F4F4');
      }
    });
  }
}
