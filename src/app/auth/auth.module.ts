import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {AuthComponent} from './auth.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [SignupComponent, SigninComponent, AuthComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class AuthModule {
}
