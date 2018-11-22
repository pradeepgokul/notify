import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComplaintsService } from '../../core/complaints/complaints.service';
import { Complaints } from '../../models/complaints.model';
import * as _ from 'lodash';
import { MatSort, MatSortable, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;

  userType;
  customer;
  id;
  complaint;
  dataSource;
  selected;
  createdBy;
  displayedColumns;
  hide;


  constructor(private router: Router, private route: ActivatedRoute, private complaintsService: ComplaintsService) { }


  ngOnInit() {

    this.dataSource = [];

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
      console.log('Customer Data!');
      this.complaint = new MatTableDataSource(data);
      this.complaint.sort = this.sort;
      console.log(this.dataSource);
      if(data.length === 0) {
        console.log('True');
        this.hide = true
      }
    });
  }

  fetchComplaints() {
    this.complaintsService.getComplaints().subscribe((data: Complaints[]) => {
      console.log('All Complaints!', data);
      this.complaint = new MatTableDataSource(data);
      this.complaint.sort = this.sort;
      if(data.length === 0) {
        console.log('True');
        this.hide = true
      }
    });
  }




}
