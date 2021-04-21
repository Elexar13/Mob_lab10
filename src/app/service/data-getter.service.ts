import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";

export interface Truck {
  truck_number: string;
  markId: number;
  year: number;
}

export interface Mark {
  mark_id: number;
  mark_name: string;
  country: string;
}

export interface User {
  id: number;
  username: string;
  password: string;
  token: string;
  is_admin: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  baseUrl = 'http://localhost/api/';
  trucks = [];
  marks = [];
  users = [];
  user: User;

  private userName = '';
  private token = '';

  showTruck = false;

  constructor(private http: HttpClient) {
    this.getMarks().subscribe(data => {
      this.marks = data;
    });
  }

  getTrucks(): Observable<Truck[]> {
    return of(this.trucks);
  }

  checkUser(user) {
    return this.http.post<any>(this.baseUrl + '?action=login', user);
  }

  getUserName() {
    return this.userName;
  }

  getUserByName(username: string) {
    return this.http.get<any>(this.baseUrl + '?action=get-user&username=' + username).pipe();
  }

  setUserName(name: string) {
    this.userName = name;
  }

  setUser(user: any) {
    this.user = user;
    console.log(this.user);
  }

  getUser(): User {
    return this.user;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }

  setToken(token: string) {
    this.token = token;
  }

  getMarks() {
    return this.http.get<any>(this.baseUrl + '?action=get-marks&token=' + this.token);
  }

  editMark(mark) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit-mark&token=' + this.token, mark
    );
  }

  editTruck(truck) {
    return this.http.post<any>(
      this.baseUrl + '?action=edit-truck&token=' + this.token, truck
    );
  }

  getTrucksByMarks(markId: string): Observable<any[]> {
    return this.http.get<any>(
      this.baseUrl + '?action=get-trucks&mark_id=' + markId + '&token='+ this.token
    );
  }

  addTruck(truck: Truck){
    return this.http.post<any>(
      this.baseUrl + '?action=add-truck&token=' + this.token, truck
    );
  }

  deleteTruck(truck: Truck) {
    console.log(truck);
    return this.http.post<any>(
      this.baseUrl + '?action=del-truck&token=' + this.token, truck
    );
  }

  addMark(mark) {
    return this.http.post<any>(
      this.baseUrl + '?action=add-mark&token=' + this.token, mark
    );
  }

  delMark(mark) {
    return this.http.post<any>(
      this.baseUrl + '?action=del-mark&token=' +this.token, mark
    );
  }
}
