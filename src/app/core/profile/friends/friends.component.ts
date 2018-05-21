import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../models/User';
import {AuthService} from '../../../service/auth.service';
import {init} from 'protractor/built/launcher';
import {ActivatedRoute, Router} from '@angular/router';
import {ChatService} from '../../../service/chat.service';
import {Chat} from '../../../models/Chat';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: User[];

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.query) {
        const query = JSON.parse(params.query);
        this.userService.superfind(query).subscribe((friends) => {
          this.friends = friends;
        });
      }
    });
  }

  createChat(receiver) {
    this.auth.getPrincipal().subscribe((principal) => {
      this.chatService.superfind({
        members:  [receiver._id, principal._id]
      }).subscribe((chats) => {
        if (chats.length === 0) {
          this.chatService.create({
            name: `${receiver.name}, ${principal.name}`,
            members: [receiver._id, principal._id]
          }).subscribe((chat) => {
            this.router.navigate(
              ['profile', principal._id, 'chats'],
              {queryParams: {selected: chat._id}}
            );
          });
        } else {
          this.router.navigate(
            ['profile', principal._id, 'chats'],
            {queryParams: {selected: chats[0]._id}}
          );
        }
      });
    });
  }
}
