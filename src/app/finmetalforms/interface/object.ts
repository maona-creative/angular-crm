export interface PA_AVA {
 name: string
}

export const pa_AVA_options: PA_AVA[] = [
    { name: '--------'},
    { name: 'No info'},
    { name: 'Yes'},
    { name: 'No'},
    { name: 'Rec'},
    { name: 'No rent'},
    { name: '...'},

]

export interface PROF {
    name: string
   }

export const prof_options: PROF[] = [
    { name: 'No info'},
    { name: 'Welder'},
    { name: 'Fitter'},
    { name: 'Wel-fit'},
    { name: 'Assemb'},
    { name: 'CNC'},
    { name: '...'}
]


export interface WEL {
    name: string
   }

export const wel_options: WEL[] = [
    { name: '--------'},
    { name: 'No info'},
    { name: 'MIG-MAG'},
    { name: 'MMA'},
    { name: 'TIG'},
    { name: '...'}

]

export interface MET {
    name: string
   }

export const met_options: MET[] = [
    { name: 'No info'},
    { name: 'Black S'},
    { name: 'Stain S'},
    { name: 'Duplex'},
    { name: 'Alumin'},
    { name: 'HS'},
    { name: 'Super Duplex'},
    { name: '...'},
]

export interface WORK {
    name: string
}

export const work_options: WORK[] = [
    { name: '--------'},
    { name: 'No info'},
    { name: 'Met Str'},
    { name: 'Mec Eng'},
    { name: 'Pipes'},
    { name: 'Tanks'},
    { name: 'Assemb'},
    { name: 'SheetM'},
    { name: '...'},
]

export interface POSITION {
    name: string
}

export const position_options: POSITION[] = [
    { name: '...'},
    { name: 'seo'},
    { name: 'taskmaster1'},
    { name: 'taskmaster2'},
    { name: 'ownerSeo'},
    { name: 'owner'},
    { name: 'info'},
    { name: 'Factory manager 1'},
    { name: 'Factory manager 2'},
    { name: 'Foreman welding 1'},
    { name: 'Foreman welding 2'},
    { name: 'Foreman assembling 1'},
    { name: 'Foreman assembling 2'},
    { name: 'HR 1'},
    { name: 'HR 2'},
    { name: 'CEO'},
]

export interface DAIL {
    name: string
}

export const dail_options: DAIL[] = [
    { name: '...'},
    { name: 'Yes'},
    { name: 'No'}
]

export interface Cl {
    name: string
}

export const cl_options: Cl[] = [
    { name: 'No info'},
    { name: '40'},
    { name: '50'},
    { name: '60'},
    { name: '60+'},
    
]

export interface LAN {
    name: string
}

export const lan_options: LAN[] = [
    { name: 'No info'},
    { name: 'ENG'},
    { name: 'FIN'},
    { name: 'RU'},
    { name: 'EE'},
    { name: '...'},
    
]
export interface HOS {
    name: string
}

export const hos_options: HOS[] = [
    { name: 'No info'},
    { name: 'Yes'},
    { name: 'No'},
    { name: 'Maybe'},

]

export interface DOC {
    name: string
}

export const doc_opinions: DOC[] = [
    { name: 'No info'},
    { name: 'Certif'},
    { name: 'Safety'},
    { name: 'Fire'},
    { name: 'Valtti'},
    { name: 'All'},
    { name: 'NoNeed'},
    { name: '...'},

]


export interface LEB {
    name: string
}

export const leb_options: LEB[] = [
    { name: '--------'},
    { name: 'No info'},
    { name: 'Low W'},
    { name: 'Fix Part'},
    { name: 'Low P'},
    { name: 'No ulko'},
    { name: 'Potent'},
    { name: 'Oly'},
    { name: 'No Rent'},
    { name: 'No Weld'},
    { name: 'CNC'},
    { name: '...'},
]

export interface CTA {
    name: string
}

export const cta_options: CTA[] = [
    { name: 'No info'},
    { name: 'Tender'},
    { name: 'Order'},
    { name: '...'}
]

export interface ACT {
    name: string
}

export const act_options: ACT[] = [
    { name: 'No info'},
    { name: 'Call_Cold'},
    { name: 'Call_Email'},
    { name: 'Call_Work'},
    { name: 'Call_Need'},
    { name: 'Call_Contract'},
]


export interface ACT2 {
    name: string
}

export const act2_options: ACT2[] = [
    { name: 'No info'},
    { name: 'Email'},
    { name: 'Offer'},
    { name: 'Contract'},

]

export interface CONTROLL {
    name: string
}

export const control_options: CONTROLL[] = [
    { name: 'No info'},
    { name: 'X-ray'},
    { name: 'Ultrasound'},
    { name: 'Penetrate'},
    { name: 'Visual control'},

]

export interface WE {
    name: string
}

export const we_options: WE[] = [
    { name: 'No info'},
    { name: 'F_S_S'},
    { name: 'S_S'},
    { name: '...'},

]

export interface MP {
    name: string
}

export const mp_options: MP[] = [
    { name: 'No info'},
    { name: '20'},
    { name: '20.5'},
    { name: '21'},
    { name: '21.5'},
    { name: '22'},
    { name: '22.5'},
    { name: '23'},
    { name: '23.5'},
    { name: '24'},
    { name: '24.5'},
    { name: '25'},
    { name: '25.5'},
    { name: '26'},
    { name: '26.5'},
    { name: '27'},
    { name: '27.5'},
    { name: '28'},
    { name: '28.5'},
    { name: '29'},
    { name: '29.5'},
    { name: '30'},
    { name: '...'},
]

export interface CARREQUIREMENT {
    name: string
}

export const carrequirement_options: CARREQUIREMENT[] = [
    { name:'No info'},
    { name:'Yes'},
    { name:'No'},
]

export interface ORDER {
    name: string;
}

export const order_options: ORDER[] = [
    { name: 'No info'},
    { name: 'New Order'},
    { name: 'Old client in a new project'},
    { name: 'People in addition to the existing order'},
]

export interface FROMWHICHCOMPANYSENT {
    name: string
}

export const fromcompanysent: FROMWHICHCOMPANYSENT[] = [
    { name: 'No info'},
    { name: 'Konstrument'},
    { name: 'Lamarmora'},
    { name: 'Metals'},
    { name: 'Tianmga'},

]

export interface FROMWHICHSALESMANORDER {
    name: string
}

export const fromsalesman_options: FROMWHICHSALESMANORDER[] = [
    { name: 'No info'},
    { name: 'Andrei' },
    { name: 'Badri'},
    { name: 'Juri'},
    { name: 'Lev Mark'},
    { name: 'Merilin'},
    { name: 'Piret'},
    { name: 'Ray'},
    { name: 'Taavi'},
]

export interface WORKPLACE {
    name: string
}

export const workplace_options: WORKPLACE[] = [
    { name: 'No info'},
    { name: 'At the factory'},
    { name: 'At the clients site'},
    { name: 'Factory / Clients site'},
]

export interface WORKEQUIPMENT {
    name: string
}

export const workequipment_options: WORKEQUIPMENT[] = [
    { name: 'No info'},
    { name: 'No need'},
    { name: 'Customers welding machine'},
    { name: 'Our welding machine'},
    { name: 'Welding machine and tool'},

]

export interface TOTALUNREACHABLE {
    name: string
}

export const totalunreachable_options: TOTALUNREACHABLE[] = [
    { name: 'No info'},
    { name: 'Yes'},
    { name: 'No'},
    { name: 'Total lack of dialing'},

]

