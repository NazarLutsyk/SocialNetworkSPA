import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { FriendTileComponent } from './friend-tile/friend-tile.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [FriendsComponent, SearchFriendComponent, FriendTileComponent]
})
export class FriendsModule { }
