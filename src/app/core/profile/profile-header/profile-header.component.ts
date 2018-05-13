import {Component, OnInit} from '@angular/core';
import {ProfileService} from '../../../service/profile.service';
import {User} from '../../../models/User';
import {Image} from '../../../models/Image';
import {ConfigService} from '../../../service/config.service';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  user: User = new User();

  constructor(
    private profileService: ProfileService,
    private globalConfig: ConfigService
  ) {
  }

  ngOnInit() {
    this.profileService.user$.subscribe((user) => {
      this.user = {...user, ...this.user};
    });
  }

}
