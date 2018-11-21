import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailRegEx = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
  message;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() { }

  loginUser(data) {
    this.userService.login(data).subscribe((res: any) => {
      console.log(res);
      if(!res.success) {
        this.message = "Incorrect Username/Password"
      } else {
        const token = res.token;
        const user  = res.user;
        this.userService.storeUserData(token, user);
        // if(res.user.userType === "customer") {
        //   this.router.navigate(['/complaint-dashboard']);
        // } else {
        //   this.router.navigate(['/dashboard']);
        // }

        this.router.navigate(['/warehouse']);
      }
    })
  }

}
