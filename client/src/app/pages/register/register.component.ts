import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  registerUser(data) {
    this.userService.register(data).subscribe((res) => {
      console.log('User Registerd!');
      console.log('res', res);
      this.router.navigate(['/login']);
    })
  }


}
