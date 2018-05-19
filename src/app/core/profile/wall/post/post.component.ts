import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../models/User';
import {UserService} from '../../../../service/user.service';
import {ConfigService} from '../../../../service/config.service';
import {ObjectUtil} from '../../../../utils/ObjectUtil';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', '../../profile.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  author: User = new User();
  apiUrl: string;

  constructor(
    private userService: UserService,
    private  globalConfig: ConfigService
  ) {
    this.apiUrl = this.globalConfig.apiURL;
  }

  ngOnInit() {
    this.userService.find(this.post.author).subscribe(user => {
      ObjectUtil.copy(this.author, user);
    });
  }

}
