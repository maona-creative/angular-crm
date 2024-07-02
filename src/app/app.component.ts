import { Component } from '@angular/core';
import { WeldertableComponent } from './weldertable/weldertable.component';
import { RouterOutlet } from '@angular/router';
import { WelderformsComponent } from './welderforms/welderforms.component';
import { NavigatorComponent } from './navigator/navigator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    WeldertableComponent,
    RouterOutlet,
    WelderformsComponent,
    NavigatorComponent
    
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = " "

 
}

