import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Complaints } from '../../models/complaints.model';
import { ComplaintsService } from '../../core/complaints/complaints.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id;
  complaint: any;
  commentHolder;
  createdBy;
  userType;
  customer;
  selected;
  isDisabled = false;

  constructor(private router: Router, private route: ActivatedRoute, private complaintsService: ComplaintsService, private snackBar: MatSnackBar) { }

  ngOnInit() {

    this.userType = JSON.parse(localStorage.getItem('userKey')).userType;
    if(this.userType === "customer") {
      this.customer = true;
      this.route.params.subscribe(params => {
        this.id = params.id;
        this.complaintsService.getComplaintsById(this.id).subscribe((res:any) => {
          this.complaint = res;
          this.commentHolder = this.complaint.comments;
          this.createdBy = this.complaint.creatorName;
          console.log(this.complaint);
          console.log(this.commentHolder);
        });
      });
    } else {
      this.customer = false;
      this.route.params.subscribe(params => {
        this.id = params.id;
        this.complaintsService.getComplaintsById(this.id).subscribe((res: any) => {
          this.complaint = res;
          this.commentHolder = this.complaint.comments;
          this.selected = res.status;
          this.createdBy = JSON.parse(localStorage.getItem('userKey')).name;
          console.log(this.complaint);
        });
      });
    }
  }

  onStatusChange(data){
    const ada = {status: data.value};
    console.log(ada);
    this.complaintsService.updateComplaintStatus(this.id, ada).subscribe(() => {
      console.log('Updated!')
      this.snackBar.open('Status Updated ', 'Ok', {
        duration: 300
      });
    });
  }

  validateComment(event) {
    console.log(event);
  }

  addComment(comment) {
    console.log(comment);
    this.complaintsService.updateComplaint(this.id, comment, this.createdBy).subscribe(res => {
      console.log('Updated!')
      this.router.navigate(['/warehouse']);
    });
  }

}
