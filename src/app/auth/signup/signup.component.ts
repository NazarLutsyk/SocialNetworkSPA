import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {NgForm} from '@angular/forms';
import {User} from '../../models/User';
import 'rxjs/add/observable/zip';
import {Router} from '@angular/router';
import {ConfigService} from '../../service/config.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.css']
})
export class SignupComponent implements OnInit {

  user: User;

  constructor(
    private authService: AuthService,
    private configService: ConfigService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  onSignUp(ngForm: NgForm) {
    const inputUser: {
      name: string,
      surname: string,
      login: string,
      password: string
    } = ngForm.form.value;

    this.user = new User();
    this.user.name = inputUser.name;
    this.user.surname = inputUser.surname;
    this.user.login = inputUser.login;
    this.user.password = inputUser.password;
    this.user.avatar = null;
    this.user.thumb = null;

    this.authService.signup(this.user).subscribe((user) => {
      this.router.navigate(
        ['profile', user._id, 'about'],
        {queryParams: {query: JSON.stringify({_id: user._id})}}
      );
    });
  }
}
