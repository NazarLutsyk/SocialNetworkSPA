import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileModule} from './profile/profile.module';
import {AppRoutingModule} from '../app-routing.module';

@NgModule({
  imports: [
    ProfileModule,
    CommonModule,
    AppRoutingModule,
  ],
  exports: [ProfileModule],
  declarations: []
})
export class CoreModule {
}
