import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Observable} from 'rxjs';
import {ThemeService} from '../../../core/services/theme.service';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss']
})
export class HomeToolbarComponent implements OnInit, OnChanges {
  @Output() toggle = new EventEmitter<void>();
  @Output() signOut = new EventEmitter<void>();
  @Input() name: string;
  firstName: string;
  @Input() isMobile: boolean;
  isDarkTheme: Observable<boolean>;

  constructor(private themeService: ThemeService) {
  }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.name) {
      this.firstName = this.name.split(' ')[0];
    }
  }


  toggleDarkTheme(checked: boolean) {
    this.themeService.setDarkTheme(checked);
  }

  onToggle() {
    this.toggle.emit();
  }

  onSignOut() {
    this.signOut.emit();
  }
}
