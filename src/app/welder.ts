
import { Available, Car, Expensivness, TotalUnreachable, WrongTel } from "./welderforms/interface/dropdown"
import { CallAction } from "./welderforms/interface/dropdown"



export interface Welder {
    id?: number
    Super_First_name?: string
    Super_Surname?: string
    Super_mail?: string
    Desired_Job_Category?: string
    Desired_position?: string
    Super_Telephone?: string
    asap?: boolean
    Comment_1?: string
    Super_Age: string
    NonGastarbeiter: boolean
    available: Available
    tatle: string
    tatle_email: CallAction
    start_date: string
    start_time: string
    start_date_email: string
    start_time_email: string
    totalUnreachable2: TotalUnreachable
    totalUnreachable: string
    calltype: string
    wrongtel: WrongTel
    expensivness: Expensivness
    costPerHour: number
    costPerHourComm: string
    car: Car
    filedFormDate: number
    idPassportDate: number
    assignedDate: number
    workSiteDate: number
    freeComment1: string
    freeComment2: string

}
