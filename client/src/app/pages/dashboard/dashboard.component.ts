import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { ComplaintsService } from '../../core/complaints/complaints.service';
import { Complaints } from '../../models/complaints.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  complaint: Complaints[];
  displayedColumns= ['title', 'createdBy',  'status', 'createdOn', 'updatedOn', 'actions'];
  constructor(private complaintsService: ComplaintsService) { }

  ngOnInit() { this.fetchComplaints() }


  fetchComplaints() {
    this.complaintsService.getComplaints().subscribe((data: Complaints[]) => {
      console.log('Requested&Recieved!')
      this.complaint = data;
    });
  }

}
