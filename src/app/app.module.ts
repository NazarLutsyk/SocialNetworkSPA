import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {AuthModule} from './auth/auth.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';
import {AuthService} from './service/auth.service';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptorService} from './service/auth-interceptor.service';
import {ConfigService} from './service/config.service';
import {UserService} from './service/user.service';
import {ImagesService} from './service/images.service';
import {BookService} from './service/book.service';
import {PostService} from './service/post.service';
import {SocketService} from './service/socket.service';
import {ChatService} from './service/chat.service';
import {MessageService} from './service/message.service';
import {AuthPageGuardService} from './service/auth-page-guard.service';
import {ProfilePageGuardService} from './service/profile-page-guard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    CoreModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    ConfigService,
    UserService,
    ImagesService,
    BookService,
    PostService,
    SocketService,
    ChatService,
    MessageService,
    AuthPageGuardService,
    ProfilePageGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
