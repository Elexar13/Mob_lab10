import { Component, OnInit } from '@angular/core';
import {DataGetterService, Mark, Truck, User} from "../service/data-getter.service";
import {ActivatedRoute} from "@angular/router";
import {SharedDataService} from "../services/shared-data.service";

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.page.html',
  styleUrls: ['./trucks.page.scss'],
})
export class TrucksPage implements OnInit {
  markId: string;
  mark: Mark;
  user: User;
  textData: string;
  trucks: Truck[];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService,
              private route: ActivatedRoute,
              private sharedData: SharedDataService) { }

  ngOnInit() {
    this.markId = this.route.snapshot.paramMap.get('markId');
    this.dataGetter.getTrucksByMarks(this.markId).subscribe(
      data => {
        this.trucks = data;
      }
    );
    this.mark = this.dataGetter.marks.filter(m => m.mark_id == Number(this.markId)).pop();
    this.user = this.dataGetter.getUser();
    console.log('user in trucks - ' + this.user);
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }

  add() {
    this.showNew = true;
  }

  delete(truck: Truck) {
    this.dataGetter.deleteTruck(truck).subscribe(
      data => console.log(data)
    );
  }

  addTruck(truck) {
    console.log(truck);
    this.dataGetter.addTruck(truck);
    this.showNew = false;
  }
}
