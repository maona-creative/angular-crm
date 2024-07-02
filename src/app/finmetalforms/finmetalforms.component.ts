import { Component } from '@angular/core';
import { NavigatorComponent } from '../navigator/navigator.component';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';


import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-finmetalforms',
  standalone: true,
  imports: [
    NavigatorComponent,
    ButtonModule,
    RouterOutlet
  ],
  templateUrl: './finmetalforms.component.html',
  styleUrl: './finmetalforms.component.css'
})
export class FinmetalformsComponent {
  
  constructor(
    private router: Router
   ) {}
}
