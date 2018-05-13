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
import { AboutComponent } from './about/about.component';
import {ProfileService} from '../../service/profile.service';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ProfileHeaderModule,
    GalleryModule,
    LibraryModule,
    FriendsModule,
    WallModule,
    AppRoutingModule
  ],
  declarations: [ProfileComponent, AboutComponent],
  providers: [ProfileService]
})
export class ProfileModule { }
