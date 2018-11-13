import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { ComplaintsService } from '../../core/complaints/complaints.service';
import { Complaints } from '../../models/complaints.model';



@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  complaint: Complaints[];
  displayedColumns= ['title',  'status', 'createdOn', 'updatedOn', 'actions'];
  constructor(private complaintsService: ComplaintsService) { }

  ngOnInit() { this.fetchComplaints() }


  fetchComplaints() {
    this.complaintsService.getComplaintsByCustomer().subscribe((data: Complaints[]) => {
      console.log('Requested&Recieved!')
      this.complaint = data;
    });
  }

}