import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private authService: AuthService
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().subscribe();
    this.router.navigate(['auth', 'signin']);
  }

  findFriends(form: NgForm) {
    let searchInput = form.form.value.searchInput;
    searchInput = searchInput.split(' ');
    searchInput[0] = searchInput[0] ? searchInput[0] : '';
    searchInput[1] = searchInput[1] ? searchInput[1] : '';
    const query = {
      name: {$regex: searchInput[0], $options: 'i'},
      surname: {$regex: searchInput[1], $options: 'i'},
    };
    this.route.params.subscribe((params) => {
      this.router
        .navigate(
          ['profile', params.id, 'friends'],
          {queryParams: {query: JSON.stringify(query)}}
        );
    });
  }

  toPrincipal() {
    this.auth.getPrincipal().subscribe((principal) => {
      this.router
        .navigate(
          ['profile', principal._id, 'about'],
          {queryParams: {query: JSON.stringify({_id: principal._id})}}
        );
    });
  }
}
