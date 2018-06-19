import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../../service/auth.service';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../../service/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-search-friend',
  templateUrl: './search-friend.component.html',
  styleUrls: ['./search-friend.component.css', '../../profile.component.css']
})
export class SearchFriendComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  searchFriends(form: NgForm) {
    this.route.parent.params.subscribe((params) => {
      let searchInput = form.form.value.search;
      searchInput = searchInput.split(' ');
      searchInput[0] = searchInput[0] ? searchInput[0] : '';
      searchInput[1] = searchInput[1] ? searchInput[1] : '';
      const query = {
        name: {$regex: searchInput[0], $options: 'i'},
        surname: {$regex: searchInput[1], $options: 'i'},
        friends: params.id
      };
      this.router.navigate(
        ['profile', params.id, 'friends'],
        {queryParams: {query: JSON.stringify(query)}}
      );
    });
  }

}
