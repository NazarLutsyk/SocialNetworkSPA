import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileHeaderComponent} from './profile-header.component';
import {AppRoutingModule} from '../../../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ProfileHeaderComponent],
  declarations: [ProfileHeaderComponent]
})
export class ProfileHeaderModule {
}
