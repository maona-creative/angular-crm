import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { WeldertableComponent } from '../weldertable/weldertable.component';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';
import { ReactiveFormsModule, Validators} from '@angular/forms';
import { Available, TotalUnreachable, WrongTel } from './interface/dropdown';
import { CallAction, Expensivness, Car } from './interface/dropdown';
import { CallType } from './interface/dropdown';
import { CommonModule } from '@angular/common';



// PrimeNg import

import { MenuModule } from 'primeng/menu';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { WelderformsService } from './welderforms.service';




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
    InputTextareaModule,
    DropdownModule,
    CommonModule
  
  

   

  ],
  templateUrl: './welderforms.component.html',
  styleUrl: './welderforms.component.css'
})
export class WelderformsComponent implements OnInit {

 

  //Dropdown for Available
  available: Available[] = [];

  //Dropdown for tatle email
  callaction: CallAction[] = [];

  //Dropdown for CALL
  calltype: CallType[] = []; 

  //Dropdown for Not answered
  totalunreachable: TotalUnreachable[] = [];

  //Dropdown for wrong tel
  wrongtel: WrongTel[] = [];

  //Dropdown for expensivness
  expensivness: Expensivness[] = [];

  //Dropdown for Car
  car: Car[] = [];


  datetime24h: Date[] | undefined;


    welderForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    Super_First_name: new FormControl('', Validators.required),
    Super_Surname: new FormControl('', Validators.required),
    Super_mail: new FormControl('', Validators.email),
    Desired_Job_Category: new FormControl(''),
    Desired_position: new FormControl(''),
    Super_Telephone: new FormControl(''),
    asap: new FormControl(''),
    Comment_1: new FormControl(''),
    Super_Age: new FormControl<Date | null>(null),
    NonGastarbeiter: new FormControl(''),
    available: new FormControl(''),
    tatle: new FormControl(''),
    tatle_email: new FormControl(''),
    start_date: new FormControl(''),
    start_time: new FormControl(''),
    start_date_email: new FormControl(''),
    start_time_email: new FormControl(''),
    totalUnreachable2: new FormControl(''),
    totalUnreachable: new FormControl(''),
    calltype: new FormControl(''),
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
    private router: Router,
    private fb: FormBuilder,
    private welderformsService: WelderformsService
   ) {

   }

   ngOnInit(): void {
    this.available = [
      { name: 'No info'},
      { name: 'Free'},
      { name: 'No'},
      { name: 'Soon Available'},
      { name: 'Available'}
    ];

    this.callaction = [
      { name: 'appointment'},
      { name: 'email'},
      { name: 'cb(int)'},
      { name: 'cb(not)'},
      { name: 'our'},
      { name: 'cb(think)'},
      { name: 'cb(free)'},
      { name: 'not answered'}
    ];

    this.calltype = [
      { name: 'No info'},
      { name: 'Talk'},
      { name: 'Not_ringing'},
      { name: 'Dialing'},
      { name: 'Switched off'},
      { name: 'Busy'},
      { name: 'Not_answered'},
      { name: 'Voice_mail'}
    ];

    this.totalunreachable = [
      { name: '--------'},
      { name: 'No info'},
      { name: 'Yes'},
      { name: 'No'},
      { name: 'Total_lack_of_dialing'}
    ];

    this.wrongtel = [
       { name: '--------'},
       { name: 'No info'},
       { name: 'No'},
       { name: 'Yes'},
       { name: '1'},
       { name: '0'},
       { name: 'Unservice_number'}
    ];

    this.expensivness = [
      { name: 'No info'},
      { name: 'Excellent specialist (verified)'},
      { name: 'Excellent specialist (unverified)'},
      { name: 'Qualification unconfirmed'},
      { name: 'Expensive but does not match the cost'}
    ];

    this.car = [
      { name: 'No info'},
      { name: 'Yes'},
      { name: 'No'}
    ]

  
  }

 async onSubmit(): Promise<void> {
    const formData = this.welderForm.value;

    try {
      const responseData = await this.welderformsService.submitWelderForms(formData);
      console.log('Form submitted successfully', responseData);
    } catch (error) {
      console.error('Error submitting form', error);
    }

    
  }
}


