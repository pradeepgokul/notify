import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsService {

  constructor(private http: HttpClient) { }

  getComplaints() {
    return this.http.get('/api/complaints');
  }

  getComplaintsById(a) {
    return this.http.get('/api/complaint/' + a);
  }

  updateComplaint(id, comment) {
    return this.http.post('/api/complaint/update/'+id, comment);
  }

  addComplaints(data) {
    return this.http.post('/api/complaints/add', data);
  }

  getComplaintsByCustomer() {
    const userEmail = JSON.parse(localStorage.getItem('userKey')).email;
    return this.http.get('/api/complaints/' + userEmail);
  }

  // updateComplaints(id) {
  //   return this.http.post(`/api/complaints/update/`);
  // }


}
