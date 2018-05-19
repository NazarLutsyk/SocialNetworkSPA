import {Component, EventEmitter, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute} from '@angular/router';
import {ObjectUtil} from '../../../utils/ObjectUtil';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css', '../profile.component.css']
})
export class AboutComponent implements OnInit {

  current: User = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      if (params.query) {
        const query = JSON.parse(params.query);
        this.userService.superfind(query).subscribe((friends) => {
          ObjectUtil.copy(this.current, friends[0]);
        });
      }
    });
  }

  updateUser(event) {
    this.userService.update(this.current._id, event).subscribe((user) => {
      ObjectUtil.copy(this.current, user);
      this.userService.updateUser.next(this.current);
    });
  }
}
