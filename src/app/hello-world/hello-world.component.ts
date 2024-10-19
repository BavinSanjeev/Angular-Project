import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.scss'
})
export class HelloWorldComponent {
 enabledRed = true;
    name = 'A Bavin Sanjeev'
    title = 'Learning Angular '
    getTitle()
    {
       return this.title + this.name;
    }

    isDisabled = true;

    clickCount = 0;
    clickC()
    {
      this.clickCount++;
    }
    value = '';
    value1 = '';

    handleInput(event:any)
    {
      this.value = (event.target as HTMLInputElement).value;
    }

    color ='red';
}
