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
