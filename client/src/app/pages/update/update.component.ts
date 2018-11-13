import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Complaints } from '../../models/complaints.model';
import { ComplaintsService } from '../../core/complaints/complaints.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id;
  complaint;


  constructor(private router: Router, private route: ActivatedRoute, private complaintsService: ComplaintsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.complaintsService.getComplaintsById(this.id).subscribe(res => {
        this.complaint = res;
        console.log(this.complaint);
      });
    });
  }

  addComment(comment) {
    this.complaintsService.updateComplaint(this.id, comment).subscribe(() => {
      console.log('Updated!')
    });
  }

}
