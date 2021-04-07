import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Truck {
  number: string;
  mark: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private trucks: Truck[] = [
      {
        number: "BE4567FL",
        mark: "Volvo"
      },
      {
        number: "AA4095UK",
        mark: "Tesla"
      },
    ];

  private userName = '';

  private users = [
    'Max', 'user', 'admin'
  ];

  getUser() {
    return this.userName;
  }

  setUser(name: string) {
    this.userName = name;
  }

  userExists(name: string): boolean {
    return this.users.indexOf(name) !== -1;
  }
  constructor() { }

  getTrucks(): Observable<Truck[]> {
    return of(this.trucks);
  }

  addTruck(truck: Truck){
    this.trucks.push(truck);
  }

  deleteTruck(index){
    this.trucks.splice(index, 1);
  }
}
