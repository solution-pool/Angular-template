import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ThemeService} from './services/theme.service';
import {HttpClientModule} from '@angular/common/http';
import {SessionGuard} from './guards/session.guard';
import {StorageService} from './services/storage.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ThemeService,
    StorageService,
    SessionGuard
  ]
})
export class CoreModule {
}
