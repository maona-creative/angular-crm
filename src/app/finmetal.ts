import { PA_AVA, PROF, WEL, MET, WORK, POSITION, DAIL, Cl, LAN, HOS, DOC, LEB, CTA, ACT, ACT2, CONTROLL, WE, 
    MP, CARREQUIREMENT, FROMWHICHCOMPANYSENT, FROMWHICHSALESMANORDER, WORKPLACE, WORKEQUIPMENT, TOTALUNREACHABLE,
    ORDER
 } from "./finmetalforms/interface/object"

export interface Finmetal {
    
    id?: number
    competitor?: string
    phone?: string
    partner_availability?: PA_AVA
    bankrupt?: boolean
    partner_description?: string // verbose_name='Part Com'
    partner_description_comm?: string //Part Com2
    call_month?: string //Call month, Date
    order_month?: string//Order month, Date
    //Working tab
    profession?: PROF //Profession, choices=PROF, default 'No info'
    welding?: WEL //choices=WEL, verbose_name='Welding', default='--------'
    metal?: MET //choices=MET, verbose_name='.  Metal  .', default='No info'
    type_work?: WORK // choices=WORK, verbose_name='. Work .', default='--------'
    profession_description?: string //verbose_name='Prof Com'
    welding_description?: string //verbose_name='Weld Com'
    metal_description?: string //verbose_name='Met Com'
    type_work_description?: string//verbose_name='Work Com'
    workingMode?: boolean //verbose_name='Reverse working mode' yes/no
    professionn2?: PROF //choices=PROF, verbose_name='Profession 2'
    welding2?: WEL //choices=WEL, verbose_name='Welding 2', default='No info'
    metal2?: MET // choices=MET, verbose_name='.  Metal 2  .', default='No info'
    type_work2?: WORK //choices=WORK, verbose_name='. Work 2 .'
    profession_description2?: string // verbose_name='Prof Com 2'
    welding_description2?: string // verbose_name='Weld Com 2
    metal_description2?: string //verbose_name='Met Com 2'
    type_work_description2?: string //verbose_name='Work Com 2'
    
    //address site kompass
    start_time?: string //verbose_name='COMM?:Metals'
    start_time2?: string //verbose_name='COMM?:Tianmga'
    representative?: string //account.Representative, models.ForeignKey
    price?: number // verbose_name='Price'
    price_comment?: string //verbose_name='Price comment'
    price_a_plus?: number //verbose_name='PriceA+'
    price_a_minus?: number //verbose_name='PriceA-'
    location?: string //ForeignKey('account.Location'
    locationApproved?: boolean //verbose_name='Location approved'
    locationCountry?: string //verbose_name='Country'
    locationCity?: string //verbose_name='City'
    locationAddress?: string //verbose_name='Address'
    locationPostalCode?: string //verbose_name='Postal code'
    locationGmap?: string //Gmap street
    
    //Name, phone, mail
    name1?: string //verbose_name='Name 1'
    profession1?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail1?: string //verbose_name='Email 1'
    phone1?: string //verbose_name='Phone 1'
    status1?: boolean 
    name2?: string //verbose_name='Name 2'
    profession2?: POSITION//choices=POSITION, blank=False, verbose_name='Position 2', default='...'
    mail2?: string //verbose_name='Email 2'
    phone2?: string //verbose_name='Phone 1'
    status2?: boolean 
    name3?: string //verbose_name='Name 3'
    profession3?: POSITION //choices=POSITION, blank=False, verbose_name='Position 3', default='...'
    mail3?: string //verbose_name='Email 3'
    phone3?: string //verbose_name='Phone 3'
    status3?: boolean 

    //Company details
    title?: string //verbose_name='Company
    url_kompass?: string // verbose_name='Web-reg'
    mailCC?: string //verbose_name='mailCC
    


    //Master name, phone, mail
    dial1M?: DAIL //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    dial2M?: DAIL //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    dial3M?: DAIL //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    dial4M?: DAIL //choices=DAIL, verbose_name='Dail Yes/No', default='---'
    dial5M?: DAIL//choices=DAIL, verbose_name='Dail Yes/No', default='---'
    profession1M?: string // choices=POSITION,verbose_name='master Position 1', default='...'
    profession2M?: string // choices=POSITION,verbose_name='master Position 2', default='...'
    profession3M?: string // choices=POSITION,verbose_name='master Position 3', default='...'
    profession4M?: string // choices=POSITION,verbose_name='master Position 4', default='...'
    profession5M?: string // choices=POSITION,verbose_name='master Position 5', default='...'
    phone1M?: string // verbose_name='master Phone 1'
    phone2M?: string // verbose_name='master Phone 2'
    phone3M?: string // verbose_name='master Phone 3'
    phone4M?: string // verbose_name='master Phone 4'
    phone5M?: string // verbose_name='master Phone 5'
    mail1M?: string //verbose_name='master Email 1
    mail2M?: string //verbose_name='master Email 2
    mail3M?: string //verbose_name='master Email 3
    mail4M?: string //verbose_name='master Email 4
    mail5M?: string //verbose_name='master Email 5

    //name, phone. mail 4-14
    name4?: string //verbose_name='Name 1'
    profession4?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail4?: string //verbose_name='Email 1'
    phone4?: string //verbose_name='Phone 1'
    status4?: boolean 
    name5?: string //verbose_name='Name 1'
    profession5?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail5?: string //verbose_name='Email 1'
    phone5?: string //verbose_name='Phone 1'
    status5?: boolean 
    name6?: string //verbose_name='Name 1'
    profession6?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail6?: string //verbose_name='Email 1'
    phone6?: string //verbose_name='Phone 1'
    status6?: boolean 
    name7?: string //verbose_name='Name 1'
    profession7?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail7?: string //verbose_name='Email 1'
    phone7?: string //verbose_name='Phone 1'
    status7?: boolean 
    name8?: string //verbose_name='Name 1'
    profession8?: POSITION//choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail8?: string //verbose_name='Email 1'
    phone8?: string //verbose_name='Phone 1'
    status8?: boolean 
    
    name9?: string //verbose_name='Name 1'
    profession9?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail9?: string //verbose_name='Email 1'
    phone9?: string //verbose_name='Phone 1'
    status9?: boolean 

    name10?: string //verbose_name='Name 1'
    profession10?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail10?: string //verbose_name='Email 1'
    phone10?: string //verbose_name='Phone 1'
    status10?: boolean 

    name11?: string //verbose_name='Name 1'
    profession11?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail11?: string //verbose_name='Email 1'
    phone11?: string //verbose_name='Phone 1'
    status11?: boolean 

    name12?: string //verbose_name='Name 1'
    profession12?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail12?: string //verbose_name='Email 1'
    phone12?: string //verbose_name='Phone 1'
    status12?: boolean 

    name13?: string //verbose_name='Name 1'
    profession13?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail13?: string //verbose_name='Email 1'
    phone13?: string //verbose_name='Phone 1'
    status13?: boolean 

    name14?: string //verbose_name='Name 1'
    profession14?: POSITION //choices=POSITION, blank=False, verbose_name='Position 1', default='...'
    mail14?: string //verbose_name='Email 1'
    phone14?: string //verbose_name='Phone 1'
    status14?: boolean

    //Conditions
    clock?: Cl //choices=Cl, verbose_name='. Hours .', default='No info'
    hours_s?: string //verbose_name='. HoursS .'
    hours_n?: string //verbose_name='. HoursN .
    language?: LAN //choices=LAN, verbose_name='Language', default='No info'
    housing?: HOS //choices=HOS, verbose_name='Apartment', default='No info'
    documents?: DOC//choices=DOC, verbose_name='. Docs .', default='No info'
    clock_description?: string // verbose_name='Hours Com'
    language_description?: string //verbose_name='Lang Com'
    housing_description?: string // verbose_name='Apa Com'
    documents_description?: string //verbose_name='Doc Com'
    kommenti?: string //verbose_name='Kommenti'

    //pay details
    payDay?: string //verbose_name='payment terms
    payPeriod?: string //verbose_name='pay period'
    eInvoiceEmail?: string //verbose_name='eInvoice email'
    billAndHoursReport?: boolean //verbose_name='Bill and hours report'
    workingDays?: string //verbose_name='Working days BIT mask?:Mon/2, Tue/4, Wed/8, Thu/16, Fri/32, Sat/64, Sun/128   Example?:mon-fri 2+4+8+16+32=62, mon-sat 2+4+8+16+32+64=126')
    eInvoiceEmailEnabled?: boolean //verbose_name='eInvoice email enabled'
    eInvoiceOperatorCode?: string // verbose_name='eInvoice operator code'
    eInvoiceEnabled?: boolean //verbose_name='eInvoice enabled'
    lunch?: number // verbose_name='lunch', number
    lunchPaidUnpaid?: boolean //verbose_name='Lunch Paid'
    coffeePause?: number // verbose_name='coffee pause 1'
    coffeePausePaidUnpaid?: string //verbose_name='CoffeePause 1 Paid'
    coffeePause2?: number // verbose_name='coffee pause 2'
    coffeePausePaidUnpaid2?: string //verbose_name='CoffeePause 2 Paid'
    coffeePause3?: number // verbose_name='coffee pause 3'
    coffeePausePaidUnpaid3?: string //verbose_name='CoffeePause 3 Paid'
    automaticAccountingSystem?: boolean // verbose_name='automatic Accounting System'

    //night shift
    nightShift?: boolean //verbose_name='Night shift'
    nightShiftPaid?: boolean //verbose_name='Paid'
    nightShiftStart?: string // time, verbose_name='Night shift start
    nightShiftEnd?: string// time, verbose_name='Night shift end'
    nightShiftRate?: number //verbose_name='Rate'

    //profession
    leybl?: LEB//choices=LEB, verbose_name='Label', default='--------'
    leybl_description?: string //verbose_name='Labl Com'
    ction?: CTA //choices=CTA, verbose_name='Order', default='No info'
    ction_start_time?: string //datetime verbose_name='Ord date'
    ction_description?: string //verbose_name='Ord comm'
    action?: ACT// choices=ACT, verbose_name='Call action', default='No info'
    action_start_time?: string //verbose_name='Call date'
    action_start_time2?: string //verbose_name='Call time'
    action_description?: string //verbose_name='Call comm
    action2?: ACT2//choices=ACT2, verbose_name='Email action', default='No info
    action2_start_time?: string //verbose_name='Email date'
    action2_start_time2?: string //verbose_name='Email time'
    action2_description?: string //verbose_name='Email comm'
    date_pup?: string //verbose_name='Auto save'

    //new question
    controll?: CONTROLL //choices=CONTROLL, verbose_name='Сontrol 1', default='No info'
    control2?: CONTROLL //choices=CONTROLL, verbose_name='Сontrol 2', default='No info'
    control3?: CONTROLL //choices=CONTROLL, verbose_name='Сontrol 3', default='No info'
    orderLossReason?: string // verbose_name='Order Loss Reason
    asap?: boolean 
    de_trop?: boolean //verbose_name='de trop
    h8?: boolean //H8
    fin?: boolean //fin
    we?: WE //choices=WE, verbose_name='Weekend', default='...'
    mp?: MP //choices=MP, verbose_name='MaxPrice €/h', default='...',

    //order
    carRequirement?: CARREQUIREMENT // choices=CARREQUIREMENT, verbose_name='Car Requirement', default='No info'
    workerQuanityRequirement?: string //verbose_name='Qnt Reg'
    workerQuanityRequirementComment?: string //verbose_name='Comment'
    order?: ORDER
    fromWhichCompanySent?: FROMWHICHCOMPANYSENT //choices=FROMWHICHCOMPANYSENT, verbose_name='From which company sent', default='No info'
    fromWhichCompanySentComment?: string // verbose_name='comment'
    fromWhichSalesmanOrder?: FROMWHICHSALESMANORDER //choices=FROMWHICHSALESMANORDER, verbose_name='From which salesman order', default='No info
    workPlace?: WORKPLACE //choices=WORKPLACE, verbose_name='Work Place', default='No info'
    workStartDate?: string //verbose_name='Work StartDate'
    workDuration?: string //verbose_name='Work Duration'
    workDescription?: string //verbose_name='Work Description'
    workEquipment?: WORKEQUIPMENT //choices=WORKEQUIPMENT, verbose_name='Work Equipment', default='No info'
    workEquipmentComment?: string //verbose_name='Comment'
    workCity?: string //verbose_name='Work City'
    workAddress?: string //verbose_name='Work Address'

    //call
    totalUnreachable?: TOTALUNREACHABLE // choices=TOTALUNREACHABLE, verbose_name='Total lack of dialing', default='No info'

   //4 years statistics
   isNew?: boolean
   categories?: string //verbose_name='Contractor categories'
   url_finder?: string //verbose_name='Web-finder'
   turnoverCategory?: string //verbose_name='turnover Category'
   industryClassification?: string //verbose_name='Industry Classification

   s1Year?: string
   s1Turnover?: string
   s1Change?: string
   s1Profit?: string
   s1Tax?: string
   s1ProfitProc?: string
   s1FinResult?: string
   s1COP?: string

   s2Year?: string
   s2Turnover?: string
   s2Change?: string
   s2Profit?: string
   s2Tax?: string
   s2ProfitProc?: string
   s2FinResult?: string
   s2COP?: string


   s3Year?: string
   s3Turnover?: string
   s3Change?: string
   s3Profit?: string
   s3Tax?: string
   s3ProfitProc?: string
   s3FinResult?: string
   s3COP?: string


   s4Year?: string
   s4Turnover?: string
   s4Change?: string
   s4Profit?: string
   s4Tax?: string
   s4ProfitProc?: string
   s4FinResult?: string
   s4COP?: string


}
