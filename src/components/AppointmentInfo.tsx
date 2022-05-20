import React from "react";
import { Typography } from "@material-ui/core";
import { AppointmentType } from "../types";
import moment from "moment";
import Chip from "@material-ui/core/Chip";
export type ModalProps = {
  selectedAppointment: AppointmentType;
};

export default function AppointmentInfo({ selectedAppointment }: ModalProps) {
  return (
    <>
      <div className="appointment-content">
        <Typography variant="h6">Patient Id</Typography>
        {/* <span>:</span> */}
        <Typography variant="body1" style={{ marginLeft: 10 }}>
          {selectedAppointment ? selectedAppointment.patientId : null}
        </Typography>
      </div>
      <div className="appointment-content">
        <Typography variant="h6">Patient name</Typography>
        {/* <span>:</span> */}
        <Typography variant="body1" style={{ marginLeft: 10 }}>
          {selectedAppointment
            ? selectedAppointment.patient_details.name
            : null}
        </Typography>
      </div>
      <div className="appointment-content">
        <Typography variant="h6">Appointment Type</Typography>
        {/* <span>:</span> */}
        <Typography variant="body1" style={{ marginLeft: 10 }}>
          {selectedAppointment ? selectedAppointment.appointmentType : null}
        </Typography>
      </div>
      <div className="appointment-content">
        <Typography variant="h6">Status</Typography>
        {/* <span>:</span> */}
        <Typography variant="body1" style={{ marginLeft: 10 }}>
          {selectedAppointment ? selectedAppointment.status : null}
        </Typography>
      </div>
      <div className="appointment-content">
        <Typography variant="h6">Is Emergency</Typography>
        {/* <span>:</span> */}
        <Typography variant="body1" style={{ marginLeft: 10 }}>
          {selectedAppointment &&
            (selectedAppointment.isEmergency ? (
              <Chip label="Yes" style={{ backgroundColor: "#ee57579e" }} />
            ) : (
              <Chip label="No" style={{ backgroundColor: "#e8e82e78" }} />
            ))}
        </Typography>
      </div>
      <div className="appointment-content">
        <Typography variant="h6">Date</Typography>
        {/* <span>:</span> */}
        <Typography variant="body1" style={{ marginLeft: 10 }}>
          {selectedAppointment
            ? moment(selectedAppointment.dateOfAppointment).format(
                "DD-mm-YYYY HH:mm"
              )
            : null}
        </Typography>
      </div>
      <div className="appointment-content">
        <Typography variant="h6">Symptoms</Typography>
        {/* <span>:</span> */}
        <Typography variant="body1" style={{ marginLeft: 10 }}>
          {selectedAppointment && selectedAppointment.symptoms.join()}
        </Typography>
      </div>
    </>
  );
}
