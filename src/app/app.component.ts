import { Component } from '@angular/core';
import { WeldertableComponent } from './weldertable/weldertable.component';
import { RouterOutlet } from '@angular/router';
import { WelderformsComponent } from './welderforms/welderforms.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WeldertableComponent,
    RouterOutlet,
    WelderformsComponent,
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = " "

 
}

