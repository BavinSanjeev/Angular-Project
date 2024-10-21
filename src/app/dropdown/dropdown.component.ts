import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule , FormsModule , ReactiveFormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
  fruits: string[] = ['Apple', 'Banana', 'Cherry', 'Date'];

  // Bound to the selected option
  selectedFruit: string = '';


  // Event handler when the selection changes
  onSelectionChange(event: Event): void {
    console.log('Selected fruit:', this.selectedFruit);
  }

  cars = [
    {name : 'Model S' , brand : 'Tesla'},
    {name : 'Mustang', brand : 'Ford'},
    {name : 'Civic' , brand : 'Toyato'}
  ];

  selectedCar = this.cars[0]; //default value

  oncarSelection(event:Event):void
  {
    console.log('Selectd Cars',this.selectedCar);
    
  }
  
  ncars = [
    {name : 'Model S' , brand : 'Tesla'},
    {name : 'Mustang', brand : 'Ford'},
    {name : 'Civic' , brand : 'Toyato'}
  ];

  carsForm  = new FormGroup(
    {
      selecteddCar : new FormControl(this.ncars[0])
    }
  );
}
