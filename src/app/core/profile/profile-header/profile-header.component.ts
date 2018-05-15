import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {ConfigService} from '../../../service/config.service';
import {ObjectUtil} from '../../../utils/ObjectUtil';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  user: User = new User();

  constructor(
    private globalConfig: ConfigService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.userService.find(id).subscribe((user) => {
        ObjectUtil.copy(this.user, user);
      });
    });
  }

  toFriends() {
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      const query = {
        friends: id
      };
      this.userService.superfind(query).subscribe((users) => {
        this.userService.users.next(users);
      });
      this.router.navigate(['profile', id, 'friends']);
    });
  }
}
