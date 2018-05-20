import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './profile.component';
import {HeaderModule} from '../header/header.module';
import {ProfileHeaderModule} from './profile-header/profile-header.module';
import {GalleryModule} from './gallery/gallery.module';
import {LibraryModule} from './library/library.module';
import {WallModule} from './wall/wall.module';
import {AppRoutingModule} from '../../app-routing.module';
import {FriendsModule} from './friends/friends.module';
import {AboutComponent} from './about/about.component';
import {InfoComponent} from './about/info/info.component';
import {ChatsModule} from './chats/chats.module';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ProfileHeaderModule,
    GalleryModule,
    LibraryModule,
    FriendsModule,
    WallModule,
    ChatsModule,
    AppRoutingModule
  ],
  declarations: [ProfileComponent, AboutComponent, InfoComponent],
  providers: []
})
export class ProfileModule { }
