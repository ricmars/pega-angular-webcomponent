import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://pw16agenda-dt1.pegacloud.io/prweb/api/v1';
  username = 'wssuser2';
  password = 'install@123';
  authToken = `Basic ${btoa(`${this.username}:${this.password}`)}`;
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: this.authToken,
    })
  };
  constructor(private httpClient: HttpClient) { } 
  getAssignments(){
    return this.httpClient.get(`${this.url}/assignments`, this.options);
  }
  getCaseData(id : string){
    return this.httpClient.get(`${this.url}/cases/${id}`, this.options);
  }
}