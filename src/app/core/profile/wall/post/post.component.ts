import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {User} from '../../../../models/User';
import {UserService} from '../../../../service/user.service';
import {ConfigService} from '../../../../service/config.service';
import {ObjectUtil} from '../../../../utils/ObjectUtil';
import {PostService} from '../../../../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css', '../../profile.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: any;
  author: User = new User();
  apiUrl: string;
  @Output() deletePost = new EventEmitter();

  constructor(
    private userService: UserService,
    private postService: PostService,
    private  globalConfig: ConfigService
  ) {
    this.apiUrl = this.globalConfig.apiURL;
  }

  ngOnInit() {
    this.userService.find(this.post.author).subscribe(user => {
      this.author = user;
    });
  }

  removePost() {
    this.postService.remove(this.post._id).subscribe(() => {
      this.deletePost.emit(this.post);
    });
  }
}
