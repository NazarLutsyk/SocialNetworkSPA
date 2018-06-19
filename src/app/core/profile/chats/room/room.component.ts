import {Component, Input, OnInit} from '@angular/core';
import {Chat} from '../../../../models/Chat';
import {MessageService} from '../../../../service/message.service';
import {UserService} from '../../../../service/user.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  @Input() chat: Chat;
  chatAvatar = '';

  constructor(
    private messageService: MessageService,
    private userService: UserService,
  ) {
  }

  ngOnInit() {
    this.userService
      .find(this.chat.members[0])
      .subscribe(user => this.chatAvatar = user.avatar);
  }

}
