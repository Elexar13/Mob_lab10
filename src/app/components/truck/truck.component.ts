import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Truck} from "../../service/data-getter.service";

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.scss'],
})
export class TruckComponent implements OnInit {

  @Input() truck: Truck;
  @Input() isNew: boolean;
  @Output() addTruck = new EventEmitter();
  @Output() cancelAddingTruck = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
    if (this.isNew) {
      this.truck = {
        number: '',
        mark: '',
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

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingTruck.emit();
    }
  }

}
