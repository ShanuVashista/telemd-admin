export interface UserType {
    id: string,
    current_practise_address: [string],
    dob: string,
    email: string,
    fax: string,
    firstname: number,
    lastname: number,
    password: number,
    gender: number,
    phone: string,
    token: string,
    profile_photo: any,
    role_id: string,
    createdAt?: string
}

export interface AppointmentType{
    _id: string,
    patient?: UserType,
    doctor?: UserType,
    patientId: string
    appointmentType: string
    status: string
    dateOfAppointment: string
    isEmergency: boolean
    updatedAt: string
}