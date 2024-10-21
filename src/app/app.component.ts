import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule
import { HelloWorldComponent } from "./hello-world/hello-world.component";
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { DropdownComponent } from "./dropdown/dropdown.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, FormsModule, HelloWorldComponent, ListComponent, FormComponent, DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'My Angular App';
  
}
