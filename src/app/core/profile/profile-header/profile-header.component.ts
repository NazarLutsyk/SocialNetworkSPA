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

  current: User = new User();
  isPrincipalPage = false;

  constructor(
    private globalConfig: ConfigService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {
  }

  ngOnInit() {

    this.auth.getPrincipal().subscribe((principal) => {
      this.userService.updateUser.subscribe((user) => {
        this.current = user;
        this.isPrincipalPage = principal._id === this.current._id;
      });
      this.route.params.subscribe((params) => {
        const id: string = params.id;
        this.userService.find(id).subscribe((user) => {
          ObjectUtil.copy(this.current, user);
          this.isPrincipalPage = principal._id === this.current._id;
        });
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

  toWallPage() {
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.router
        .navigate(
          ['profile', id, 'wall'],
          {queryParams: {query: JSON.stringify({author: id})}}
        );
    });
  }

  toChatsPage() {
    // todo normal redirect to cgats page
    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.router
        .navigate(
          ['profile', id, 'chats'],
          // {queryParams: {query: JSON.stringify({author: id})}}
        );
    });
  }
}
