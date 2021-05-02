import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchesTabsComponent} from './switches-&-tabs.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {TemplateSwitchModule} from '../../../../../shared/components/template-switch/template-switch.module';
import {TemplateTabModule} from '../../../../../shared/components/template-tab/template-tab.module';

const routes: Routes = [
  {
    path: '',
    component: SwitchesTabsComponent,
  }
];

@NgModule({
  declarations: [SwitchesTabsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FlexModule,
    MatSlideToggleModule,
    MatTabsModule,
    TemplateSwitchModule,
    TemplateTabModule,
  ]
})
export class SwitchesTabsModule {
}
