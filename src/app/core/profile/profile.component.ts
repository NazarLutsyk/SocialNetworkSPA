import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../service/user.service';
import {ObjectUtil} from '../../utils/ObjectUtil';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = new User();

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
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

}
