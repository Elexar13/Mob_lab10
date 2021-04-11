import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Truck {
  number: string;
  mark: string;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private trucks: Truck[] = [
      {
        number: "BE4567FL",
        mark: "Volvo",
        year: 2010
      },
      {
        number: "AA4095UK",
        mark: "Tesla",
        year: 2018
      },
      {
        number: "KF6565LK",
        mark: "Opel",
        year: 2013
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

  getTrucksByMarks(truckMark: string): Observable<any[]> {
    return of(this.trucks.filter(elem => {
      return elem.mark === truckMark;
    }));
  }

  addTruck(truck: Truck){
    this.trucks.push(truck);
  }

  deleteTruck(index){
    this.trucks.splice(index, 1);
  }
}
