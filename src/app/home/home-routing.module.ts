import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import {TruckComponent} from "../components/truck/truck.component";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), FormsModule, IonicModule, CommonModule],
  declarations: [
    TruckComponent
  ],
  exports: [RouterModule, TruckComponent]
})
export class HomePageRoutingModule {}
