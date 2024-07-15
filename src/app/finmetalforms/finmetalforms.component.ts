import { Component } from '@angular/core';
import { NavigatorComponent } from '../navigator/navigator.component';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
//import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import {  FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule, Validators} from '@angular/forms';
import { PA_AVA, pa_AVA_options, PROF, prof_options, WEL, wel_options, 
  MET, met_options, WORK, work_options, POSITION, position_options, DAIL, dail_options, 
  Cl, cl_options, LAN, lan_options, HOS, hos_options, DOC, doc_opinions, LEB, leb_options, 
CTA, cta_options, ACT, act_options, ACT2, act2_options, CONTROLL, control_options,
WE, we_options, MP, mp_options, CARREQUIREMENT, carrequirement_options, FROMWHICHCOMPANYSENT,
 fromcompanysent, FROMWHICHSALESMANORDER, fromsalesman_options, WORKEQUIPMENT, workplace_options,
workequipment_options, WORKPLACE, TOTALUNREACHABLE, totalunreachable_options, ORDER, order_options } from './interface/object';
import { FinmetalService } from './finmetal.service';

//PrimeNg import
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputNumberModule } from 'primeng/inputnumber';







@Component({
  selector: 'app-finmetalforms',
  standalone: true,
  imports: [
    NavigatorComponent,
    ButtonModule,
    RouterOutlet,
    TabMenuModule,
    AccordionModule,
    ReactiveFormsModule,
    DropdownModule,
    CalendarModule,
    InputSwitchModule,
    InputNumberModule,
    
    
    
  
  ],
  templateUrl: './finmetalforms.component.html',
  styleUrl: './finmetalforms.component.css'
})
export class FinmetalformsComponent {

  datetime24h: Date[] | undefined;

  partner_availability: PA_AVA[] = pa_AVA_options; 
  profession: PROF[] = prof_options;
  welding: WEL[] = wel_options;
  metal: MET[] = met_options;
  type_work: WORK[] = work_options;
  position: POSITION[] = position_options;
  dialM: DAIL[] = dail_options;
  professionM: POSITION[] = position_options;
  clock: Cl[] = cl_options;
  language: LAN[] = lan_options;
  housing: HOS[] = hos_options;
  documents: DOC[] = doc_opinions;
  label: LEB[] = leb_options;
  order: CTA[] = cta_options;
  action: ACT[] = act_options;
  action_email: ACT2[] = act2_options;
  control: CONTROLL[] = control_options;
  weekend: WE[] = we_options;
  max_price: MP[] = mp_options;
  car_require: CARREQUIREMENT[] = carrequirement_options;
  sent_company: FROMWHICHCOMPANYSENT[] = fromcompanysent;
  salesman: FROMWHICHSALESMANORDER[] = fromsalesman_options;
  workplace: WORKPLACE[] = workplace_options;
  work_equipment: WORKEQUIPMENT[] = workequipment_options;
  total_unreachable: TOTALUNREACHABLE[] = totalunreachable_options;
  order_1: ORDER[] = order_options;

  getCurrentDate(): Date {
    return new Date();
  }

 
  

  finmetalForm: FormGroup = new FormGroup({
    id: new FormControl(''), 
    competitor: new FormControl('', Validators.maxLength(75)), //competitors
    phone: new FormControl('', Validators.maxLength(512)), 
    partner_availability:  new FormControl(''), //Partners,  choices=PA_AVA
    bankrupt: new FormControl(false), // boolean
    partner_description: new FormControl('', Validators.maxLength(512)), // verbose_name='Part Com'
    partner_description_comm: new FormControl('', Validators.maxLength(512)), //Part Com2
    call_month: new FormControl<Date | null>(null), //Call month, Date
    order_month: new FormControl<Date | null>(null), //Order month, Date
    //Working tab
    profession: new FormControl(this.profession[0]), //Profession, choices=PROF, default 'No info'
    welding: new FormControl(this.welding[0]), //choices=WEL, verbose_name='Welding', default='--------'
    metal: new FormControl(this.metal[0]), //choices=MET, verbose_name='.  Metal  .', default='No info'
    type_work: new FormControl(this.type_work[0]), // choices=WORK, verbose_name='. Work .', default='--------'
    profession_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Prof Com'
    welding_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Weld Com'
    metal_description: new FormControl('',  Validators.maxLength(512)), //verbose_name='Met Com'
    type_work_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Work Com'
    workingMode: new FormControl(false), //verbose_name='Reverse working mode' yes/no
    professionn2: new FormControl(this.profession[0]), //choices=PROF, verbose_name='Profession 2'
    welding2: new FormControl(this.welding[0]), //choices=WEL, verbose_name='Welding 2', default='No info'
    metal2: new FormControl(this.metal[0]), // choices=MET, verbose_name='.  Metal 2  .', default='No info'
    type_work2: new FormControl(this.type_work[0]), //choices=WORK, verbose_name='. Work 2 .'
    profession_description2: new FormControl('', Validators.maxLength(512)), // verbose_name='Prof Com 2'
    welding_description2: new FormControl('', Validators.maxLength(512)), // verbose_name='Weld Com 2
    metal_description2: new FormControl('', Validators.maxLength(512)), //verbose_name='Met Com 2'
    type_work_description2: new FormControl('', Validators.maxLength(512)), //verbose_name='Work Com 2'
    
    //address site kompass
    start_time: new FormControl('' ), //verbose_name='COMM: Metals'
    start_time2: new FormControl(''), //verbose_name='COMM: Tianmga'
    representative: new FormControl(''), //account.Representative, models.ForeignKey
    price: new FormControl('', Validators.maxLength(16)), // verbose_name='Price'
    price_comment: new FormControl(''), //verbose_name='Price comment'
    price_a_plus: new FormControl('', Validators.maxLength(16) ), //verbose_name='PriceA+'
    price_a_minus: new FormControl('', Validators.maxLength(16)), //verbose_name='PriceA-'
    location: new FormControl('', ), //ForeignKey('account.Location'
    locationApproved: new FormControl(false), //verbose_name='Location approved'
    locationCountry: new FormControl('', Validators.maxLength(50)), //verbose_name='Country'
    locationCity: new FormControl('', Validators.maxLength(100)), //verbose_name='City'
    locationAddress: new FormControl('', Validators.maxLength(512)), //verbose_name='Address'
    locationPostalCode: new FormControl('', Validators.maxLength(100)), //verbose_name='Postal code'
    locationGmap: new FormControl('', Validators.maxLength(1024)), //Gmap street
    
    //Name, phone, mail
    name1: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession1: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail1: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone1: new FormControl('', Validators.pattern('^[- +()0-9]+$')), //verbose_name='Phone 1'
    status1: new FormControl(true), 
    name2: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 2'
    profession2: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 2', default='...'
    mail2: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 2'
    phone2: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status2: new FormControl(true), 
    name3: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 3'
    profession3: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 3', default='...'
    mail3: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 3'
    phone3: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 3'
    status3: new FormControl(true), 

    //Company details
    title: new FormControl('', Validators.maxLength(512)), //verbose_name='Company
    url_kompass: new FormControl('', Validators.maxLength(512)), // verbose_name='Web-reg'
    mailCC: new FormControl('', Validators.maxLength(512)), //verbose_name='mailCC
    


    //Master name, phone, mail
    dial1M: new FormControl(this.dialM[0]), //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    dial2M: new FormControl(this.dialM[0]), //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    dial3M: new FormControl(this.dialM[0]), //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    dial4M: new FormControl(this.dialM[0]), //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    dial5M: new FormControl(this.dialM[0]), //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    profession1M: new FormControl(this.professionM[0]), // choices=POSITION,verbose_name='master Position 1', default='...'
    profession2M: new FormControl(this.professionM[0]), // choices=POSITION,verbose_name='master Position 2', default='...'
    profession3M: new FormControl(this.professionM[0]), // choices=POSITION,verbose_name='master Position 3', default='...'
    profession4M: new FormControl(this.professionM[0]), // choices=POSITION,verbose_name='master Position 4', default='...'
    profession5M: new FormControl(this.professionM[0]), // choices=POSITION,verbose_name='master Position 5', default='...'
    phone1M: new FormControl('', Validators.maxLength(512)), // verbose_name='master Phone 1'
    phone2M: new FormControl('', Validators.maxLength(512)), // verbose_name='master Phone 2'
    phone3M: new FormControl('', Validators.maxLength(512)), // verbose_name='master Phone 3'
    phone4M: new FormControl('', Validators.maxLength(512)), // verbose_name='master Phone 4'
    phone5M: new FormControl('', Validators.maxLength(512)), // verbose_name='master Phone 5'
    mail1M: new FormControl('', Validators.email), //verbose_name='master Email 1
    mail2M: new FormControl('', Validators.email), //verbose_name='master Email 2
    mail3M: new FormControl('', Validators.email), //verbose_name='master Email 3
    mail4M: new FormControl('', Validators.email), //verbose_name='master Email 4
    mail5M: new FormControl('', Validators.email), //verbose_name='master Email 5

    //name, phone, mail 4-14
    name4: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession4: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail4: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone4: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status4: new FormControl(true), 
    name5: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession5: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail5: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone5: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status5: new FormControl(true), 
    name6: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession6: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail6: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone6: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status6: new FormControl(true), 
    name7: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession7: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail7: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone7: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status7: new FormControl(true), 
    name8: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession8: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail8: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone8: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status8: new FormControl(true), 
    
    name9: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession9: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail9: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone9: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status9: new FormControl(true), 

    name10: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession10: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail10: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone10: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status10: new FormControl(true), 

    name11: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession11: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail11: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone11: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status11: new FormControl(true), 

    name12: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession12: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail12: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone12: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status12: new FormControl(true), 

    name13: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession13: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail13: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone13: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status13: new FormControl(true), 

    name14: new FormControl('', Validators.maxLength(512)), //verbose_name='Name 1'
    profession14: new FormControl(this.position[0]), //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail14: new FormControl('', Validators.maxLength(512)), //verbose_name='Email 1'
    phone14: new FormControl('', Validators.maxLength(512)), //verbose_name='Phone 1'
    status14: new FormControl(true),

    //Conditions
    clock: new FormControl(this.clock[0]), //choices=Cl, verbose_name='. Hours .', default='No info'
    hours_s: new FormControl('', Validators.maxLength(15)), //verbose_name='. HoursS .'
    hours_n: new FormControl('', Validators.maxLength(15)), //verbose_name='. HoursN .
    language: new FormControl(this.language[0]), //choices=LAN, verbose_name='Language', default='No info'
    housing: new FormControl(this.housing[0]), //choices=HOS, verbose_name='Apartment', default='No info'
    documents: new FormControl(this.documents[0]), //choices=DOC, verbose_name='. Docs .', default='No info'
    clock_description: new FormControl('', Validators.maxLength(512)), // verbose_name='Hours Com'
    language_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Lang Com'
    housing_description: new FormControl('', Validators.maxLength(512)), // verbose_name='Apa Com'
    documents_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Doc Com'
    kommenti: new FormControl(''), //verbose_name='Kommenti'

    //pay details
    payDay: new FormControl(''), //verbose_name='payment terms
    payPeriod: new FormControl('', Validators.maxLength(512)), //verbose_name='pay period'
    eInvoiceEmail: new FormControl('',Validators.maxLength(512)), //verbose_name='eInvoice email'
    billAndHoursReport: new FormControl(false), //verbose_name='Bill and hours report'
    workingDays: new FormControl(''), //verbose_name='Working days BIT mask: Mon/2, Tue/4, Wed/8, Thu/16, Fri/32, Sat/64, Sun/128   Example: mon-fri 2+4+8+16+32=62, mon-sat 2+4+8+16+32+64=126')
    eInvoiceEmailEnabled: new FormControl(false), //verbose_name='eInvoice email enabled'
    eInvoiceAddress: new FormControl(''), //verbose_name='eInvoice address'
    eInvoiceOperatorCode: new FormControl('', Validators.maxLength(15)), // verbose_name='eInvoice operator code'
    eInvoiceEnabled: new FormControl(false), //verbose_name='eInvoice enabled'
    lunch: new FormControl(''), // verbose_name='lunch', number
    lunchPaidUnpaid: new FormControl(false), //verbose_name='Lunch Paid'
    coffeePause: new FormControl(''), //number, verbose_name='coffee pause 1'
    coffeePausePaidUnpaid: new FormControl(false), //verbose_name='CoffeePause 1 Paid'
    coffeePause2: new FormControl(''), //number, verbose_name='coffee pause 2'
    coffeePausePaidUnpaid2: new FormControl(false), //verbose_name='CoffeePause 2 Paid'
    coffeePause3: new FormControl(''), //number, verbose_name='coffee pause 3'
    coffeePausePaidUnpaid3: new FormControl(false), //verbose_name='CoffeePause 3 Paid'
    automaticAccountingSystem: new FormControl(false), // verbose_name='automatic Accounting System'

    //night shift
    nightShift: new FormControl(false), //verbose_name='Night shift'
    nightShiftPaid: new FormControl(false), //verbose_name='Paid'
    nightShiftStart: new FormControl(''), // time, verbose_name='Night shift start
    nightShiftEnd: new FormControl(''), // time, verbose_name='Night shift end'
    nightShiftRate: new FormControl('', Validators.maxLength(16)), //verbose_name='Rate', number

    //profession
    leybl: new FormControl(this.label[0]), //choices=LEB, verbose_name='Label', default='--------'
    leybl_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Labl Com'
    ction: new FormControl(this.order[0]), //choices=CTA, verbose_name='Order', default='No info'
    ction_start_time: new FormControl(''), //datetime verbose_name='Ord date'
    ction_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Ord comm'
    action: new FormControl(this.action[0]), // choices=ACT, verbose_name='Call action', default='No info'
    action_start_time: new FormControl(''), //verbose_name='Call date'
    action_start_time2: new FormControl(''), //verbose_name='Call time'
    action_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Call comm
    action2: new FormControl(this.action_email[0]), //choices=ACT2, verbose_name='Email action', default='No info
    action2_start_time: new FormControl(''), //verbose_name='Email date'
    action2_start_time2: new FormControl(''), //verbose_name='Email time'
    action2_description: new FormControl('', Validators.maxLength(512)), //verbose_name='Email comm'
    date_pup: new FormControl<Date>(new Date()), //verbose_name='Auto save', date now

    //new question
    controll: new FormControl(this.control[0]), //choices=CONTROLL, verbose_name='Сontrol 1', default='No info'
    control2: new FormControl(this.control[0]), //choices=CONTROLL, verbose_name='Сontrol 2', default='No info'
    control3: new FormControl(this.control[0]), //choices=CONTROLL, verbose_name='Сontrol 3', default='No info'
    orderLossReason: new FormControl(''),  // verbose_name='Order Loss Reason
    asap: new FormControl(false), 
    de_trop: new FormControl(false), //verbose_name='de trop
    h8: new FormControl(false), //H8
    fin: new FormControl(false), //fin
    we: new FormControl(this.weekend[3]), //choices=WE, verbose_name='Weekend', default='...'
    mp: new FormControl(this.max_price[22] ), //choices=MP, verbose_name='MaxPrice €/h', default='...',

    //order
    carRequirement: new FormControl(this.car_require[0]), // choices=CARREQUIREMENT, verbose_name='Car Requirement', default='No info'
    workerQuanityRequirement: new FormControl(''), //verbose_name='Qnt Reg'
    workerQuanityRequirementComment: new FormControl(''), //verbose_name='Comment'
    order: new FormControl(''), //choices=ORDER, verbose_name='Order', default='No info',
    fromWhichCompanySent: new FormControl(this.sent_company[0]), //choices=FROMWHICHCOMPANYSENT, verbose_name='From which company sent', default='No info'
    fromWhichCompanySentComment: new FormControl(''), // verbose_name='comment'
    fromWhichSalesmanOrder: new FormControl(this.salesman[0]), //choices=FROMWHICHSALESMANORDER, verbose_name='From which salesman order', default='No info
    workPlace: new FormControl(this.workplace[0]), //choices=WORKPLACE, verbose_name='Work Place', default='No info'
    workStartDate: new FormControl(''), //verbose_name='Work StartDate'
    workDuration: new FormControl(''), //verbose_name='Work Duration'
    workDescription: new FormControl(''), //verbose_name='Work Description'
    workEquipment: new FormControl(this.work_equipment[0]), //choices=WORKEQUIPMENT, verbose_name='Work Equipment', default='No info'
    workEquipmentComment: new FormControl(''), //verbose_name='Comment'
    workCity: new FormControl(''), //verbose_name='Work City'
    workAddress: new FormControl(''), //verbose_name='Work Address'

    //call
    totalUnreachable: new FormControl(this.total_unreachable[0]), // choices=TOTALUNREACHABLE, verbose_name='Total lack of dialing', default='No info'

   //4 years statistics
   isNew: new FormControl(false),
   categories: new FormControl(''), //verbose_name='Contractor categories'
   url_finder: new FormControl(''), //verbose_name='Web-finder'
   turnoverCategory: new FormControl(''), //verbose_name='turnover Category'
   industryClassification: new FormControl(''), //verbose_name='Industry Classification

   s1Year: new FormControl('', Validators.maxLength(50)),
   s1Turnover: new FormControl('', Validators.maxLength(50)),
   s1Change: new FormControl('', Validators.maxLength(50)),
   s1Profit: new FormControl('', Validators.maxLength(50)),
   s1Tax: new FormControl('', Validators.maxLength(50)),
   s1ProfitProc: new FormControl('', Validators.maxLength(50)),
   s1FinResult: new FormControl('', Validators.maxLength(50)),
   s1COP: new FormControl('', Validators.maxLength(50)),

   s2Year: new FormControl('', Validators.maxLength(50)),
   s2Turnover: new FormControl('', Validators.maxLength(50)),
   s2Change: new FormControl('', Validators.maxLength(50)),
   s2Profit: new FormControl('', Validators.maxLength(50)),
   s2Tax: new FormControl('', Validators.maxLength(50)),
   s2ProfitProc: new FormControl('', Validators.maxLength(50)),
   s2FinResult: new FormControl('', Validators.maxLength(50)),
   s2COP: new FormControl('', Validators.maxLength(50)),


   s3Year: new FormControl('', Validators.maxLength(50)),
   s3Turnover: new FormControl('', Validators.maxLength(50)),
   s3Change: new FormControl('', Validators.maxLength(50)),
   s3Profit: new FormControl('', Validators.maxLength(50)),
   s3Tax: new FormControl('', Validators.maxLength(50)),
   s3ProfitProc: new FormControl('', Validators.maxLength(50)),
   s3FinResult: new FormControl('', Validators.maxLength(50)),
   s3COP: new FormControl('', Validators.maxLength(50)),


   s4Year: new FormControl('', Validators.maxLength(50)),
   s4Turnover: new FormControl('', Validators.maxLength(50)),
   s4Change: new FormControl('', Validators.maxLength(50)),
   s4Profit: new FormControl('', Validators.maxLength(50)),
   s4Tax: new FormControl('', Validators.maxLength(50)),
   s4ProfitProc: new FormControl('', Validators.maxLength(50)),
   s4FinResult: new FormControl('', Validators.maxLength(50)),
   s4COP: new FormControl('', Validators.maxLength(50)),


  });
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private finmetalService: FinmetalService
    
   ) {}


   async onSubmit(): Promise<void> {
    const formData = this.finmetalForm.value;
    console.log('Form data in finmetal.component:', formData);

    try {
      const responseData = await this.finmetalService.submitFinmetalForms(formData);
      console.log('Fin metal form submitted successfully', responseData);
      // Optionally reset the form
    this.finmetalForm.reset();
    } catch (error) {
      console.error('Error submitting form', error);
    }

   /*
try {
      const responseData = await this.welderformsService.submitWelderForms(formData);
      console.log('Form submitted successfully', responseData);
    } catch (error) {
      console.error('Error submitting form', error);
    }
   */

    
  }

}
