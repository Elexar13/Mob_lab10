import { Component } from '@angular/core';
import { DataGetterService, Truck } from '../service/data-getter.service';
import {SharedDataService} from "../services/shared-data.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Вантажівки';
  userName: string;

  trucks: Truck[];
  marks = [];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService, private sharedData: SharedDataService) {
    this.dataGetter.getTrucks().subscribe(
      (data) => {
        this.trucks = data;
        this.trucks.forEach(t => this.marks.push(t.mark));
      }
    );
    this.userName = this.dataGetter.getUser();
  }

  ionViewDidEnter() {
    if (this.sharedData.getTextData() != '') {
      this.title = this.sharedData.getTextData();
    }
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
