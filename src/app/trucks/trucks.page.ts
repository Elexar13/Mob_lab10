import { Component, OnInit } from '@angular/core';
import {DataGetterService, Truck} from "../service/data-getter.service";
import {ActivatedRoute} from "@angular/router";
import {SharedDataService} from "../services/shared-data.service";

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.page.html',
  styleUrls: ['./trucks.page.scss'],
})
export class TrucksPage implements OnInit {
  mark: string;

  textData: string;
  trucks: Truck[];

  showNew = false;
  showEdit = -1;

  constructor(private dataGetter: DataGetterService,
              private route: ActivatedRoute,
              private sharedData: SharedDataService) { }

  ngOnInit() {
    this.mark = this.route.snapshot.paramMap.get('mark');
    this.dataGetter.getTrucksByMarks(this.mark).subscribe(
      data => {
        this.trucks = data;
      }
    );
  }

  passData() {
    this.sharedData.setTextData(this.textData);
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
