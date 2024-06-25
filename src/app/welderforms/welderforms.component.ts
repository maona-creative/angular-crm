import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { WeldertableComponent } from '../weldertable/weldertable.component';
import {FormGroup, FormControl} from '@angular/forms';
import {ReactiveFormsModule, Validators} from '@angular/forms';



// PrimeNg import

import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-welderforms',
  standalone: true,
  imports: [
    ButtonModule,
    RouterOutlet,
    WeldertableComponent,
    MenuModule,
    AccordionModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
    InputMaskModule,
    InputSwitchModule,
    CalendarModule,
  

   

  ],
  templateUrl: './welderforms.component.html',
  styleUrl: './welderforms.component.css'
})
export class WelderformsComponent  {

  welderForm = new FormGroup({
    id: new FormControl(''),
    Super_First_name: new FormControl('', Validators.required),
    Super_Surname: new FormControl('', Validators.required),
    Super_mail: new FormControl('', Validators.email),
    Desired_Job_Category: new FormControl(''),
    Desired_position: new FormControl(''),
    Super_Telephon: new FormControl(''),
    asap: new FormControl(''),
    Comment_1: new FormControl(''),
    Super_Age: new FormControl(''),
    NonGastarbeiter: new FormControl(''),
    available: new FormControl(''),
    tatle: new FormControl(''),
    tatle_email: new FormControl(''),
    start_time: new FormControl(''),
    start_time_email: new FormControl(''),
    totalUnreachable2: new FormControl(''),
    totalUnreachable: new FormControl(''),
    call: new FormControl(''),
    wrongtel: new FormControl(''),
    expensivness: new FormControl(''),
    costPerHour: new FormControl(''),
    costPerHourComm: new FormControl(''),
    car: new FormControl(''),
    filedFormDate: new FormControl(''),
    idPassportDate: new FormControl(''),
    assignedDate: new FormControl(''),
    workSiteDate: new FormControl(''),
    freeComment1: new FormControl(''),
    freeComment2: new FormControl('')



  });

 

  constructor(
    private router: Router
   ) {}

  
  


}
