import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../models/User';
import {ObjectUtil} from '../../../../utils/ObjectUtil';
import {AuthService} from '../../../../service/auth.service';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'app-friend-tile',
  templateUrl: './friend-tile.component.html',
  styleUrls: ['./friend-tile.component.css', '../../profile.component.css']
})
export class FriendTileComponent implements OnInit {

  @Input() current: User;
  @Output() createChat = new EventEmitter();

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    ObjectUtil.copy(this.current, new User());
  }

  addFriend(friend: string) {
    this.authService.getPrincipal().subscribe((principal) => {
      if (principal.friends.indexOf(friend) < 0) {
        principal.friends.push(friend);
        const toUpdate = {
          friends: principal.friends
        };
        this.userService.update(principal._id, toUpdate).subscribe((updated) => {
          this.userService.find(friend).subscribe((user) => {
            this.current = new User();
            ObjectUtil.copy(this.current, user);
          });
        });
      }
    });
  }

  removeFriend(friend: string) {
    this.authService.getPrincipal().subscribe((principal) => {
      if (principal.friends.indexOf(friend) >= 0) {
        principal.friends.splice(principal.friends.indexOf(friend), 1);
        const toUpdate = {
          friends: principal.friends
        };
        this.userService.update(principal._id, toUpdate).subscribe((updated) => {
          this.userService.find(friend).subscribe((user) => {
            this.current = new User();
            ObjectUtil.copy(this.current, user);
          });
        });
      }
    });
  }

  addChat(current: User) {
    this.createChat.emit(current);
  }
}
