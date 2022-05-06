export interface UserType {
    id: string,
    current_practise_address: [string],
    dob: string,
    email: string,
    fax: number,
    name:string,
    firstname: string,
    lastname: string,
    password: string,
    gender: string,
    phone: number,
    token: string,
    profile_photo: any,
    role_id: string,
    location:string,
    createdAt?: string,
    isApproved?: boolean
}

export interface AppointmentType{
    _id: string,
    patient_details?: UserType,
    doctor_details?: UserType,
    patientId: string
    appointmentType: string
    status: string
    dateOfAppointment: string
    isEmergency: boolean
    updatedAt: string
    symptoms:Array<string> 
}