import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../service/user.service';
import {User} from '../../../models/User';
import {AuthService} from '../../../service/auth.service';
import {init} from 'protractor/built/launcher';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  friends: User[];

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
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
}
