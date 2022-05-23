import React from "react";
import { Typography } from "@material-ui/core";
import { UserType } from "../types";
import moment from "moment";
export type ModalProps = {
  patientInfo: UserType;
};

export default function PatientInfo({ patientInfo }: ModalProps) {
  return (
    <>
      <div className="appointment-details">
        <div className="appointment-content">
          <Typography variant="h6">Patient Id:</Typography>
          <Typography variant="body1" style={{ marginLeft: 10 }}>
            {patientInfo ? patientInfo._id : null}
          </Typography>
        </div>
        <div className="appointment-content">
          <Typography variant="h6">Patient name:</Typography>
          <Typography variant="body1" style={{ marginLeft: 10 }}>
            {patientInfo
              ? `${patientInfo.firstname || ""} ${patientInfo.lastname || ""}`
              : null}
          </Typography>
        </div>
        <div className="appointment-content">
          <Typography variant="h6">DOB:</Typography>
          <Typography variant="body1" style={{ marginLeft: 10 }}>
            {patientInfo ? patientInfo.dob : null}
          </Typography>
        </div>
        <div className="appointment-content">
          <Typography variant="h6">Phone:</Typography>
          <Typography variant="body1" style={{ marginLeft: 10 }}>
            {patientInfo ? patientInfo.phone : null}
          </Typography>
        </div>
        <div className="appointment-content">
          <Typography variant="h6">Location:</Typography>
          <Typography variant="body1" style={{ marginLeft: 10 }}>
            {patientInfo ? patientInfo.location : null}
          </Typography>
        </div>
        <div className="appointment-content">
          <Typography variant="h6">Gender:</Typography>
          <Typography variant="body1" style={{ marginLeft: 10 }}>
            {patientInfo ? patientInfo.gender : null}
          </Typography>
        </div>
        <div className="appointment-content">
          <Typography variant="h6">Profile Photo:</Typography>
          <img
            src={patientInfo ? patientInfo.profile_photo : null}
            className="border"
            style={{ width: 50, height: 50, objectFit: "contain" }}
          />
        </div>
      </div>
    </>
  );
}
