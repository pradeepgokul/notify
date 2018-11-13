import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authToken;
  options;



  register(formData) {
    return this.http.post('/api/register', formData);
  }

  login(data) {
    return this.http.post('/api/login', data);
  }

  logOut(){
    console.log('LoggedOut!');
    localStorage.removeItem("userKey");
    localStorage.removeItem("tokenKey");
  }

  storeUserData(token, user) {
    localStorage.setItem("userKey", JSON.stringify(user));
    localStorage.setItem("tokenKey", JSON.stringify(token));
  }



}
