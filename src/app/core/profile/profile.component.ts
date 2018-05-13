import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../models/User';
import {UserService} from '../../service/user.service';
import {ProfileService} from '../../service/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: User = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private profileService: ProfileService
  ) {
  }

  ngOnInit() {
    this.profileService.user$.subscribe(user => this.user = user);

    this.route.params.subscribe((params) => {
      const id: string = params.id;
      this.userService.find(id).subscribe((user) => {
        this.user = user;
        this.profileService.user$.next(this.user);
      });
    });
  }

}
