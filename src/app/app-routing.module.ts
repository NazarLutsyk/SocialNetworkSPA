import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './auth/auth.component';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {ProfileComponent} from './core/profile/profile.component';
import {WallComponent} from './core/profile/wall/wall.component';
import {LibraryComponent} from './core/profile/library/library.component';
import {GalleryComponent} from './core/profile/gallery/gallery.component';
import {FriendsComponent} from './core/profile/friends/friends.component';
import {AboutComponent} from './core/profile/about/about.component';

const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, children: [
      {path: 'signin', component: SigninComponent},
      {path: 'signup', component: SignupComponent}
    ]
  },
  {
    path: 'profile/:id', component: ProfileComponent, children: [
      {path: 'wall', component: WallComponent},
      {path: 'library', component: LibraryComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'friends', component: FriendsComponent},
      {path: 'about', component: AboutComponent},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
