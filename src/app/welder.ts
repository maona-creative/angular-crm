
import { Available, Car, Expensivness, TotalUnreachable, WrongTel } from "./welderforms/interface/dropdown"
import { CallAction } from "./welderforms/interface/dropdown"



export interface Welder {
    id?: number
    Super_First_name?:  
    Super_Surname?:  
    Super_mail?:  
    Desired_Job_Category?:  
    Desired_position?:  
    Super_Telephone?:  
    asap?: boolean
    Comment_1?:  
    Super_Age:  
    NonGastarbeiter: boolean
    available: Available
    tatle:  
    tatle_email: CallAction
    start_date:  
    start_time:  
    start_date_email:  
    start_time_email:  
    totalUnreachable2: TotalUnreachable
    totalUnreachable:  
    calltype:  
    wrongtel: WrongTel
    expensivness: Expensivness
    costPerHour: number
    costPerHourComm:  
    car: Car
    filedFormDate: number
    idPassportDate: number
    assignedDate: number
    workSiteDate: number
    freeComment1:  
    freeComment2:  

}
