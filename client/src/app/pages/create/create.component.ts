import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ComplaintsService } from '../../core/complaints/complaints.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  constructor(private complaintsService: ComplaintsService, private router: Router) {

  }

  ngOnInit() { }

  addComplaint(a) {
    const userId = JSON.parse(localStorage.getItem('userKey')).email;
    const userName = JSON.parse(localStorage.getItem('userKey')).name;
    console.log(userId);
    const complaint = {
      title: a.title,
      description: a.description,
      status: a.status,
      createdBy: userId,
      creatorName: userName
    }
    this.complaintsService.addComplaints(complaint).subscribe(() => {
      console.log('Registered!');
      this.router.navigate(['/complaint-dashboard']);
    });
  }

}
