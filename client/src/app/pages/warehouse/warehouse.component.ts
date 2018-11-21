import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComplaintsService } from '../../core/complaints/complaints.service';
import { Complaints } from '../../models/complaints.model';
import * as _ from 'lodash';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {

  userType;
  customer;
  id;
  complaint: Complaints[];
  selected;
  createdBy;
  displayedColumns;


  constructor(private router: Router, private route: ActivatedRoute, private complaintsService: ComplaintsService) { }


  ngOnInit() {

    this.userType = JSON.parse(localStorage.getItem('userKey')).userType;
    console.log('user', this.userType);
    if(this.userType === "customer") {
      this.customer = true;
      this.displayedColumns= ['title',  'status', 'createdOn', 'updatedOn', 'actions'];
      this.fetchComplaintsByCustomer();

    } else {
      this.customer = false;
      this.displayedColumns= ['title', 'createdBy',  'status', 'createdOn', 'updatedOn', 'actions'];
      this.fetchComplaints();
    }



  }

  fetchComplaintsByCustomer() {
    this.complaintsService.getComplaintsByCustomer().subscribe((data: Complaints[]) => {
      console.log('Requested&Recieved!')
      this.complaint = _.sortBy(data,"updatedOn");
      console.log(data);
    });
  }

  fetchComplaints() {
    this.complaintsService.getComplaints().subscribe((data: Complaints[]) => {
      console.log('Requested&Recieved!')
      this.complaint =  _.sortBy(data,"updatedOn");
    });
  }




}
