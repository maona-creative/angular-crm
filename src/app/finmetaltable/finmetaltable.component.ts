import { Component } from '@angular/core';
import { FinmetalService } from '../finmetalforms/finmetal.service';
import { Finmetal } from '../finmetal';
import { Column } from '../column';
import { CommonModule } from '@angular/common';
import { FinmetaltableService } from './finmetaltable.service';

// PrimeNG imports

import { ListboxModule } from 'primeng/listbox';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-finmetaltable',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    CardModule,
    
  ],
  templateUrl: './finmetaltable.component.html',
  styleUrl: './finmetaltable.component.css'
})
export class FinmetaltableComponent {

  constructor(
 private finmetaltableService: FinmetaltableService,
  ) {}

 finmetals: Finmetal[] = [];
 loading: boolean = false;

 cols!: Column[];

 selectedFinmetal: Finmetal[] = [];

 ngOnInit(): void {
  this.finmetaltableService.getFinmetal().subscribe((finmetals) => {
    this.finmetals = finmetals;
    
  });

this.cols = [

  { field: 'id', header: 'ID', type: 'number' },
  { field: 'competitor', header: 'Competitors', type: 'text' },
  { field: 'phone', header: 'Phone', type: 'text' },
  { field: 'partner_availability', header: 'Partners', type: 'object' },
  { field: 'partner_description', header: 'Part Com', type: 'text' },
  { field: 'partner_description_comm', header: 'Part Com2', type: 'text' },
  { field: 'call_month', header: 'Call month', type: 'text' },
  { field: 'order_month', header: 'Order month', type: 'text' },
  { field: 'bankrupt', header: 'Bankrupt', type: 'boolean' },
  { field: 'profession', header: 'Profession', type: 'object' },
  { field: 'welding', header: 'Welding', type: 'object' },
  { field: 'metal', header: '.Metal.', type: 'object' },
  { field: 'type_work', header: '. Work.', type: 'object' },
  { field: 'profession_description', header: 'Prof Com', type: 'text' },
  { field: 'welding_description', header: 'Weld Com', type: 'text' },
  { field: 'metal_description', header: 'Metal Com', type: 'text' },
  { field: 'type_work_description', header: 'Work Com', type: 'text' },
  { field: 'workingMode', header: 'Reverse working mode', type: 'boolean' },
  { field: 'professionn2', header: 'Profession 2', type: 'text' },
  { field: 'welding2', header: 'Welding 2', type: 'text' },
  { field: 'metal2', header: '.Metal 2.', type: 'text' },
  { field: 'type_work2', header: '. Work 2.', type: 'text' },
  { field: 'profession_description2', header: 'Prof Com 2', type: 'text' },
  { field: 'welding_description2', header: 'Weld Com 2', type: 'text' },
  { field: 'metal_description2', header: 'Metal Com 2', type: 'text' },
  { field: 'type_work_description2', header: 'Work Com 2', type: 'text' },
  { field: 'start_time', header: 'COMM: Metals', type: 'text' },
  { field: 'start_time2', header: 'COMM: Tianmga', type: 'text' },
  { field: 'representative', header: 'Representative', type: 'text' },
  { field: 'price', header: 'Price', type: 'number' },
  { field: 'price_comment', header: 'Price comment', type: 'text' },
  { field: 'price_a_plus', header: 'PriceA+', type: 'number' },
  { field: 'price_a_minus', header: 'PriceA-', type: 'number' },
  { field: 'location', header: 'Location (foreignKey)', type: 'text' },
  { field: 'locationApproved', header: 'Location approved', type: 'boolean' },
  { field: 'locationCountry', header: 'Country', type: 'text' },
  { field: 'locationCity', header: 'City', type: 'text' },
  { field: 'locationAddress', header: 'Address', type: 'text' },
  { field: 'locationPostalCode', header: 'Postal code', type: 'text' },
  { field: 'locationGmap', header: 'Gmap street', type: 'text' },
  { field: 'name1', header: 'Name 1', type: 'text' },
  { field: 'profession1', header: 'Position', type: 'object' },
  { field: 'mail1', header: 'Mail 1', type: 'text' },
  { field: 'phone1', header: 'Phone 1', type: 'text' },
  { field: 'status1', header: 'Status 1', type: 'checkbox' },
  { field: 'name2', header: 'Name 2', type: 'text' },
  { field: 'profession2', header: 'Position', type: 'object' },
  { field: 'mail2', header: 'Mail 2', type: 'text' },
  { field: 'phone2', header: 'Phone 2', type: 'text' },
  { field: 'status2', header: 'Status 2', type: 'checkbox' },
  { field: 'name3', header: 'Name 3', type: 'text' },
  { field: 'profession3', header: 'Position', type: 'object' },
  { field: 'mail3', header: 'Mail 3', type: 'text' },
  { field: 'phone3', header: 'Phone 3', type: 'text' },
  { field: 'status3', header: 'Status 3', type: 'checkbox' },
  { field: 'title', header: 'Company', type: 'text' },
  { field: 'url_kompass', header: 'Web-reg', type: 'text' },
  { field: 'mailCC', header: 'MailCC', type: 'text' },
  { field: 'dial1M', header: 'Dail', type: 'boolean' },
  { field: 'profession1M', header: 'Master Position 1', type: 'object' },
  { field: 'phone1M', header: 'Master Phone 1', type: 'text' },
  { field: 'mail1M', header: 'Master Email 1', type: 'text' },
  { field: 'dial2M', header: 'Dail 2', type: 'boolean' },
  { field: 'profession2M', header: 'Master Position 2', type: 'object' },
  { field: 'phone2M', header: 'Master Phone 2', type: 'text' },
  { field: 'mail2M', header: 'Master Email 2', type: 'text' },
  { field: 'dial3M', header: 'Dail 3', type: 'boolean' },
  { field: 'profession3M', header: 'Master Position 3', type: 'object' },
  { field: 'phone3M', header: 'Master Phone 3', type: 'text' },
  { field: 'mail3M', header: 'Master Email 3', type: 'text' },
  { field: 'name4', header: 'Name 4', type: 'text' },
  { field: 'profession4', header: 'Position', type: 'object' },
  { field: 'mail4', header: 'Mail 4', type: 'text' },
  { field: 'phone4', header: 'Phone 4', type: 'text' },
  { field: 'status4', header: 'Status 4', type: 'checkbox' },
  { field: 'name5', header: 'Name 5', type: 'text' },
  { field: 'profession5', header: 'Position', type: 'object' },
  { field: 'mail5', header: 'Mail 5', type: 'text' },
  { field: 'phone5', header: 'Phone 5', type: 'text' },
  { field: 'status5', header: 'Status 5', type: 'checkbox' },
  { field: 'name6', header: 'Name 6', type: 'text' },
  { field: 'profession6', header: 'Position', type: 'object' },
  { field: 'mail6', header: 'Mail 6', type: 'text' },
  { field: 'phone6', header: 'Phone 6', type: 'text' },
  { field: 'status6', header: 'Status 6', type: 'checkbox' },
  { field: 'name7', header: 'Name 7', type: 'text' },
  { field: 'profession7', header: 'Position', type: 'object' },
  { field: 'mail7', header: 'Mail 7', type: 'text' },
  { field: 'phone7', header: 'Phone 7', type: 'text' },
  { field: 'status7', header: 'Status 7', type: 'checkbox' },
  { field: 'name8', header: 'Name 8', type: 'text' },
  { field: 'profession8', header: 'Position', type: 'object' },
  { field: 'mail8', header: 'Mail 8', type: 'text' },
  { field: 'phone8', header: 'Phone 8', type: 'text' },
  { field: 'status8', header: 'Status 8', type: 'checkbox' },
  { field: 'name9', header: 'Name 9', type: 'text' },
  { field: 'profession9', header: 'Position', type: 'object' },
  { field: 'mail9', header: 'Mail 9', type: 'text' },
  { field: 'phone9', header: 'Phone 9', type: 'text' },
  { field: 'status9', header: 'Status 9', type: 'checkbox' },
  { field: 'name10', header: 'Name 10', type: 'text' },
  { field: 'profession10', header: 'Position', type: 'object' },
  { field: 'mail10', header: 'Mail 10', type: 'text' },
  { field: 'phone10', header: 'Phone 10', type: 'text' },
  { field: 'status10', header: 'Status 10', type: 'checkbox' },
  { field: 'name11', header: 'Name 11', type: 'text' },
  { field: 'profession11', header: 'Position', type: 'object' },
  { field: 'mail11', header: 'Mail 11', type: 'text' },
  { field: 'phone11', header: 'Phone 11', type: 'text' },
  { field: 'status11', header: 'Status 11', type: 'checkbox' },
  { field: 'name12', header: 'Name 12', type: 'text' },
  { field: 'profession12', header: 'Position', type: 'object' },
  { field: 'mail12', header: 'Mail 12', type: 'text' },
  { field: 'phone12', header: 'Phone 12', type: 'text' },
  { field: 'status12', header: 'Status 12', type: 'checkbox' },
  { field: 'name13', header: 'Name 13', type: 'text' },
  { field: 'profession13', header: 'Position', type: 'object' },
  { field: 'mail13', header: 'Mail 13', type: 'text' },
  { field: 'phone13', header: 'Phone 13', type: 'text' },
  { field: 'status133', header: 'Status 13', type: 'checkbox' },
  { field: 'name14', header: 'Name 14', type: 'text' },
  { field: 'profession14', header: 'Position', type: 'object' },
  { field: 'mail14', header: 'Mail 14', type: 'text' },
  { field: 'phone14', header: 'Phone 14', type: 'text' },
  { field: 'status14', header: 'Status 14', type: 'checkbox' },

  { field: 'clock', header: '. Hours', type: 'object' },
  { field: 'hours_s', header: '. HoursS .', type: 'text' },
  { field: 'hours_n', header: '. HoursN .', type: 'text' },
  { field: 'language', header: 'Language', type: 'object' },
  { field: 'housing', header: 'Apartment', type: 'text' },
  { field: 'documents', header: '. Docs .', type: 'text' },
  { field: 'clock_description', header: 'Hours Com', type: 'text' },
  { field: 'language_description', header: 'Lang Com', type: 'text' },
  { field: 'housing_description', header: 'Apa Com', type: 'text' },
  { field: 'documents_description', header: 'Doc Com', type: 'text' },
  { field: 'kommenti', header: 'Kommenti', type: 'text' },
  { field: '', header: '', type: 'text' },
  { field: '', header: '', type: 'text' },
  { field: '', header: '', type: 'text' },
  { field: '', header: '', type: 'text' },
  { field: '', header: '', type: 'text' },
  { field: '', header: '', type: 'text' },







];

}
}
