import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router,
    private userService: UserService
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
    this.userService.superfind(query).subscribe((users) => {
      this.userService.users.next(users);
      this.auth.getPrincipal().subscribe((principal) => {
        this.router.navigate(['profile', principal._id, 'friends']);
      });
    });
  }

}
