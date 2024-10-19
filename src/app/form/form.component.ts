import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';
import { ListComponent } from "../list/list.component";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, CommonModule, ListComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
    car:string[] = [];
    carName = "";
    savecarName()
    {
      this.car.push(this.carName);
      this.carName= "";
      console.log(this.car);
    }
}
