import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends.component';
import { SearchFriendComponent } from './search-friend/search-friend.component';
import { FriendTileComponent } from './friend-tile/friend-tile.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [FriendsComponent, SearchFriendComponent, FriendTileComponent]
})
export class FriendsModule { }
