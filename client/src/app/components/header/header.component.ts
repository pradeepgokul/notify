import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userName = JSON.parse(localStorage.getItem('userKey')).name;
  }

  onLogOut() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }

}
