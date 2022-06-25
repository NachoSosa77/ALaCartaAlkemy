import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  ApiUrl :string = "http://challenge-react.alkemy.org/";

  constructor(private http:HttpClient) {

  }

  getToken(email:string,password:string){
    const body = {
      email: email,
      password: password
    }
    return this.http.post<any>(this.ApiUrl, body)
  }
}
