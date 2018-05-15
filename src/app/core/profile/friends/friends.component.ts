import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../models/User';
import {AuthService} from '../../../service/auth.service';
import {init} from 'protractor/built/launcher';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  users: User[] = [];

  constructor(
    private userService: UserService,
  ) {
    this.userService.users.subscribe(users => {
      this.users = users;
    });
  }

  ngOnInit() {
  }

}
