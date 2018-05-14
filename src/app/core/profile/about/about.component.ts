import {Component, OnInit} from '@angular/core';
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

  user: User = new User();

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.parent.params.subscribe((params) => {
      const id: string = params.id;
      this.userService.find(id).subscribe((user) => {
        ObjectUtil.copy(this.user, user);
      });
    });
  }

}
