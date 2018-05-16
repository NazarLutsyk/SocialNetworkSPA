import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {ConfigService} from '../../../service/config.service';
import {ObjectUtil} from '../../../utils/ObjectUtil';
import {UserService} from '../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {

  current: User = new User();

  constructor(
    private globalConfig: ConfigService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.userService.find(id).subscribe((user) => {
        ObjectUtil.copy(this.current, user);
      });
    });
  }

  toFriendsPage() {
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.router
        .navigate(
          ['profile', id, 'friends'],
          {queryParams: {query: JSON.stringify({friends: id})}}
        );
    });
  }

  toLibraryPage() {
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.router
        .navigate(
          ['profile', id, 'library'],
          {queryParams: {query: JSON.stringify({author: id})}}
        );
    });
  }

  toAboutPage() {
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.router
        .navigate(
          ['profile', id, 'about'],
          {queryParams: {query: JSON.stringify({_id: id})}}
        );
    });
  }

  toGalleryPage() {
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.router
        .navigate(
          ['profile', id, 'gallery'],
          {queryParams: {query: JSON.stringify({author: id})}}
        );
    });
  }
}
