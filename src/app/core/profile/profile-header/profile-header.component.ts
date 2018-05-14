import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {Image} from '../../../models/Image';
import {ConfigService} from '../../../service/config.service';
import {ObjectUtil} from '../../../utils/ObjectUtil';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute} from '@angular/router';

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
