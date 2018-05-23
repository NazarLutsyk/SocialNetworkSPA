import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {ConfigService} from '../../service/config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../auth.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private configService: ConfigService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  signIn(ngForm: NgForm) {
    this.authService.signin(ngForm.form.value.login, ngForm.form.value.password)
      .subscribe((user) => {
        this.router.navigate(
          ['profile', user._id, 'about'],
          {queryParams: {query: JSON.stringify({_id: user._id})}}
        );
      });
  }

}
