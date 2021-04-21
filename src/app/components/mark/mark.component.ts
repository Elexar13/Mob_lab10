import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataGetterService, Mark, Truck} from "../../service/data-getter.service";

@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss'],
})
export class MarkComponent implements OnInit {

  @Input() mark: Mark;
  @Input() isNew: boolean;
  @Output() cancelAddingTruck = new EventEmitter();
  title: string;
  showTrucks: boolean;

  constructor(private dataGetter: DataGetterService) { }

  ngOnInit() {
    if (this.isNew) {
      this.mark = {
        mark_id: 0,
        mark_name: '',
        country: ''
      };
      this.title = 'Нова вантажівка'
    }
  }

  addNewMark() {
    if (this.isNew) {
      this.dataGetter.addMark(this.mark).subscribe(
        data => console.log(data)
      );
    } else {
      this.saveMark();
    }
  }

  cancelAdding() {
    if (this.isNew) {
      this.cancelAddingTruck.emit();
    }
  }

  saveMark() {
    this.dataGetter.editMark(this.mark).subscribe(
      data => console.log(data)
    );
  }

}
