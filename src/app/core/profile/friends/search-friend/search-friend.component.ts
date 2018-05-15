import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../../models/User';
import {AuthService} from '../../../../service/auth.service';

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrls: ['./search-friend.component.css', '../../profile.component.css']
})
export class SearchFriendComponent implements OnInit {

  principal: User;

  constructor(
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    this.auth.getPrincipal().subscribe(principal => this.principal = principal);
  }

}
