import React from 'react';
import { Typography } from "@material-ui/core";
import { UserType } from "../types";
import moment from "moment";
export type ModalProps = {
    doctorInfo: UserType;
}

export default function DoctorInfo({ doctorInfo }: ModalProps) {
    return (
        <>
            <div className="appointment-details">
                <div className="appointment-content">
                    <Typography variant="h6">Doctor Id:</Typography>
                    <Typography variant="body1" style={{ marginLeft: 10 }}>{doctorInfo ? doctorInfo.id : null}</Typography>
                </div>
                <div className="appointment-content">
                    <Typography variant="h6">Name:</Typography>
                    <Typography variant="body1" style={{ marginLeft: 10 }}>{doctorInfo ? doctorInfo.name : null}</Typography>
                </div>
                <div className="appointment-content">
                    <Typography variant="h6">Phone:</Typography>
                    <Typography variant="body1" style={{ marginLeft: 10 }}>{doctorInfo ? doctorInfo.phone : null}</Typography>
                </div>
                <div className="appointment-content">
                    <Typography variant="h6">Email:</Typography>
                    <Typography variant="body1" style={{ marginLeft: 10 }}>{doctorInfo ? doctorInfo.email : null}</Typography>
                </div>
                <div className="appointment-content">
                    <Typography variant="h6">Practise address:</Typography>
                    <Typography variant="body1" style={{ marginLeft: 10 }}>{doctorInfo ? doctorInfo.current_practise_address : null}</Typography>
                </div>
                <div className="appointment-content">
                    <Typography variant="h6">Fax:</Typography>
                    <Typography variant="body1" style={{ marginLeft: 10 }}>{doctorInfo ? doctorInfo.fax : null}</Typography>
                </div>
                <div className="appointment-content">
                    <Typography variant="h6">Profile Photo:</Typography>
                    <img src={doctorInfo? doctorInfo.profile_photo : null} className="border" style={{ width: 50, height: 50, objectFit: "contain" }} />
                </div>
            </div>
        </>
    )
}   