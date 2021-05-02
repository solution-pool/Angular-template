import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatIconModule} from '@angular/material/icon';
import localeES from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TemplateToastModule} from './shared/components/template-toast/template-toast.module';
import {TemplateConfirmationModalModule} from './shared/components/template-confirmation-modal/template-confirmation-modal.module';
import {TemplateModalModule} from './shared/components/template-modal/template-modal.module';

registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatIconModule,
    TemplateToastModule,
    TemplateConfirmationModalModule,
    TemplateModalModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
