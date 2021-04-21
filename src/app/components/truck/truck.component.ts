import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {DataGetterService, Mark, Truck} from "../../service/data-getter.service";

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss'],
})
export class TruckComponent implements OnInit {

  @Input() truck: Truck;
  @Input() isNew: boolean;
  @Input() markId: number;
  @Output() addTruck = new EventEmitter();
  @Output() cancelAddingTruck = new EventEmitter();
  title: string;

  constructor(private dataGetter: DataGetterService) { }

  ngOnInit() {
    if (this.isNew) {
      this.truck = {
        truck_number: '',
        markId: this.markId,
        year: 0
      };
      this.title = 'Нова вантажівка'
    }
  }

  addNew() {
    if (this.isNew){
      this.addTruck.emit(this.truck);
    }
  }

  addNewTruck() {
    console.log(this.truck);
    if (this.isNew) {
      this.dataGetter.addTruck(this.truck).subscribe(
        data => console.log(data)
      );
    } else {
      this.saveTruck();
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingTruck.emit();
    }
  }

  saveTruck() {
    this.dataGetter.editTruck(this.truck).subscribe(
      data => console.log(data)
    );
  }

}
