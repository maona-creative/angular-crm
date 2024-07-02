import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Welder } from '../welder';
import { WelderService } from '../welder.service';
import { Column } from '../column';
import { Jobcategory } from '../jobcategory';
import { WelderformsComponent } from '../welderforms/welderforms.component';

// PrimeNG imports
import { InputMaskModule } from 'primeng/inputmask'
import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-weldertable',
  standalone: true,
  imports: [
    RouterOutlet,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    InputMaskModule,
    ListboxModule,
    DropdownModule,
    MultiSelectModule,
    CardModule,
    CalendarModule,
    ButtonModule,
    AppComponent,
    WelderformsComponent,
  
  ],
  templateUrl: './weldertable.component.html',
  styleUrl: './weldertable.component.css'
})
export class WeldertableComponent {

  onSubmit() {
    this.router.navigate(['/welder-forms']);
  }
  
  constructor(
    private welderService: WelderService,
    private router: Router
   ) {}

   welders: Welder[] = [];
   loading: boolean = false;
  
   welderDialog: boolean = false;
   welder: Welder = {} as Welder; 
   selectedWelders: Welder[] = [];
   submitted: boolean = false;
 
 
 
   cols!: Column[];
 
   jobcategory!: Jobcategory[];
 
   selectedJobCat!: Jobcategory[];

   metaKey: boolean = true;

   ngOnInit(): void {
    this.welderService.getWelders().subscribe((welders) => {
      this.welders = welders;
      
    });

  this.cols = [
      { field: 'id', header: 'ID', type: 'number' },
      { field: 'Super_First_name', header: 'Name', type: 'text' },
      { field: 'Super_Surname', header: 'Surname', type: 'text' },
      { field: 'Super_mail', header: 'Email', type: 'text'  },
      { field: 'Desired_Job_Category', header: 'Desired job category', type: 'text' },
      { field: 'Desired_position', header: 'Desired position', type: 'text' },
      { field: 'Super_Telephone', header: 'Telephone', type: 'text' },
      { field: 'asap', header: 'ASAP', type: 'checkbox' },
      { field: 'Comment_1', header: 'Comment', type: 'textarea' },
      { field: 'Super_Age', header: 'Date of birth', type: 'date'},
      { field: 'NonGastarbeiter', header: 'NonGastarbeiter', type: 'checkbox'},
      { field: 'available', header: 'Available', type: "object" },
      { field: 'tatle', header: 'Call action', type: "object" },
      { field: 'tatle_email', header: 'Email action', type: "object" },
      { field: 'start_date', header: 'Start date', type: "text" },
      { field: 'start_time', header: 'Start time', type: "text" },
      { field: 'start_date_email', header: 'Start date email', type: "text" },
      { field: 'start_time_email', header: 'Start time email', type: "text" },
      { field: 'totalUnreachable', header: 'Total lack of dialing', type: "object" },
      { field: 'totalUnreachable2', header: 'Not answered', type: "object" },
      { field: 'calltype', header: 'CALL', type: "object" },
      { field: 'wrongtel', header: 'Wrong Tel', type: 'object'},
      { field: 'expensivness', header: 'Expensivness', type: 'object'},
      { field: 'costPerHour', header: 'cost Per Hour', type: 'number'},
      { field: 'costPerHourComm', header: 'Comment', type: 'textarea'},
      { field: 'car', header: 'Car', type: 'object'},
      { field: 'filedFormDate', header: 'FiledForm Date', type: 'date'},
      { field: 'idPassportDate', header: 'ID/Passport Date', type: 'date'},
      { field: 'assignedDate', header: 'Assigned Date', type: 'date'},
      { field: 'workSiteDate', header: 'Worksite Date', type: 'date'},
      { field: 'freeComment1', header: 'FreeComment1', type: 'textarea'},
      { field: 'freeComment2', header: 'FreeComment2', type: 'textarea'}
      
  ];
}

 
}
