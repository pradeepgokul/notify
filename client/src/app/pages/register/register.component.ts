import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/user/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  public n: number = 0;

  constructor(private userService: UserService, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  registerUser(data) {
    console.log(this.model);
    this.userService.register(data).subscribe((res) => {
      console.log('User Registerd!');
      console.log('res', res);
      this.router.navigate(['/login']);
    })
  }


  createAgentData() {

    const val = ++this.n;
    const name = "Agent " + val;
    const email = "agent" + val + "@abc.com";

    const agent = {
      fullName: name,
      email: email,
      password: "agent",
      userType: 'agent',
      mobile_number:"0987654321"
    };

    this.userService.register(agent).subscribe((res) => {
      this.snackBar.open('Agent Created ', 'Ok', {
        duration: 500
      });
    })
  }


}
