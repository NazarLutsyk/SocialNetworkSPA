import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout().subscribe();
    this.router.navigate(['auth','signin']);
  }

}
