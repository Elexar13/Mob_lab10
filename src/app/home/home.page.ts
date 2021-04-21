import { Component } from '@angular/core';
import {DataGetterService, Truck, User} from '../service/data-getter.service';
import {SharedDataService} from "../services/shared-data.service";
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title = 'Вантажівки';
  userName: string;
  isAdmin = '';

  trucks: Truck[];
  marks: any[];
  user: User;

  showNew = false;
  showEdit = -1;
  showMarks = true;

  constructor(private dataGetter: DataGetterService, private sharedData: SharedDataService) {
    this.dataGetter.getTrucks().subscribe(
      (data) => {
        this.trucks = data;
      }
    );
    this.userName = this.dataGetter.getUserName();

    this.dataGetter.getMarks().subscribe(
      (data) => {
        this.marks = data;
      }
    );

    // this.dataGetter.getUserByName(this.userName).subscribe(
    //   data => {
    //     this.user = data;
    //     this.dataGetter.setUser(this.user);
    //   }
    // );

    this.user = this.dataGetter.getUser();
    console.log('user in home - ' + this.dataGetter.getUser());
  }

  ionViewDidEnter() {
    if (this.sharedData.getTextData() != '') {
      this.title = this.sharedData.getTextData();
    }
  }

  addMark(mark) {
    this.showNew = true;
    this.dataGetter.addMark(mark).subscribe(
      res => {
        this.dataGetter.getMarks().subscribe(
          (data) => {
            this.marks = data;
          }
        );
      }
    );
  }


  deleteMark(mark) {
    this.dataGetter.delMark(mark).subscribe(
      res => {
        this.dataGetter.getMarks().subscribe(
          (data) => {
            this.marks = data;
          }
        );
      }
    );
  }

  // delete(index: number) {
  //   this.dataGetter.deleteTruck(index);
  // }

  addTruck(truck) {
    this.dataGetter.addTruck(truck);
    this.showNew = false;
  }

  add(){
    this.showNew = true;
  }

  showTrucks(bool: boolean) {
    this.dataGetter.showTruck = bool;
    this.showMarks = !bool;
  }
}
