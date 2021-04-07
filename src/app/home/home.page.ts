import { Component } from '@angular/core';
import { DataGetterService, Truck } from '../service/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userName: string;

  trucks: Truck[];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService) {
    this.dataGetter.getTrucks().subscribe(
      (data) => {
        this.trucks = data;
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  add() {
    this.showNew = true;
  }

  delete(index: number) {
    this.dataGetter.deleteTruck(index);
  }

  addTruck(truck) {
    this.dataGetter.addTruck(truck);
    this.showNew = false;
  }
}
