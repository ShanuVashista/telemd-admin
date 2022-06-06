import React, { useEffect, useState } from "react";
import { ReactStateDeclaration } from "@uirouter/react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SimpleCard from "./components/Dashboard/cards";
import { Card, Typography } from "@material-ui/core";
import UserCard from "./components/Dashboard/userCards";
import PatientCard from "./components/Dashboard/PatientCard";
import {
  Users,
  BookOpen,
  Zap,
  FastForward,
  UserCheck,
  UserX,
  User,
  Check,
} from "react-feather";
import { AppointmentType } from "./types";
import { $crud } from "./factories/CrudFactory";
import classNames from "classnames";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 5,
    },
    paper: {
      padding: theme.spacing(2),
      //   textAlign: 'center',
      background: "F1EEE9",
      color: theme.palette.text.secondary,
    },
  })
);

export function Dashboard() {
  const [appointmentComplete, setAppointmentComplete] = useState<Number>(0);
  const [appointmentUpcoming, setAppointmentUpcoming] = useState<Number>(0);
  const [appointmentRejected, setAppointmentRejected] = useState<Number>(0);
  const [doctorTotal, setDoctorToatal] = useState<Number>(0);
  const [doctorCorporate, setDoctorCorporate] = useState<Number>(0);
  const [doctorPending, setDoctorPending] = useState<Number>(0);
  const [doctorApproved, setDoctorApproved] = useState<Number>(0);
  const [patientTotal, setPatientTotal] = useState<Number>(0);
  const [patientCorporate, setPatientCorporate] = useState<Number>(0);
  const [patientPending, setPatientPending] = useState<Number>(0);
  const [loading, setLoading] = useState<Boolean>(false);

  const [limit] = useState(5);
  const [upcomingAppointments, setUpcomingAppointments] = useState<
    AppointmentType[]
  >([]);
  const [upcomingAppointmentLoading, setUpcomingAppointmentLoading] =
    useState<Boolean>(false);
  const [completedAppointments, setCompletedAppointments] = useState<
    AppointmentType[]
  >([]);
  const [completedAppointmentLoading, setCompletedAppointmentLoading] =
    useState<Boolean>(false);

  const classes = useStyles();

  const getAppointmentData = async () => {
    try {
      setLoading(true);
      let data = await $crud.get("appointments/count", {});

      let complete_appointment = data.data[0].complete_appointment;
      let reject_appointment = data.data[0].reject_appointment;
      let upcoming_appointment = data.data[0].upcoming_appointment;

      if (complete_appointment.length > 0) {
        setAppointmentComplete(complete_appointment[0].count);
      } else {
        setAppointmentComplete(0);
      }

      if (reject_appointment.length > 0) {
        setAppointmentRejected(reject_appointment[0].count);
      } else {
        setAppointmentRejected(0);
      }
      if (upcoming_appointment.length > 0) {
        setAppointmentUpcoming(upcoming_appointment[0].count);
      } else {
        setAppointmentUpcoming(0);
      }
    } finally {
      setLoading(false);
    }
  };

  const getUserData = async () => {
    try {
      setLoading(true);
      const data = await $crud.get("user/count", {});

      console.log("data", data.data);

      let corporate_doctor = data.data[0].corporate_doctor;
      let total_doctor = data.data[0].total_doctor;
      let pending_doctor = data.data[0].pending_doctor;
      let approved_doctor = data.data[0].approved_doctor;
      let corporate_patient = data.data[0].corporate_patient;
      let pending_patient = data.data[0].pending_patient;
      let total_patient = data.data[0].total_patient;

      if (corporate_doctor.length > 0) {
        setDoctorCorporate(corporate_doctor[0].count);
      } else {
        setDoctorCorporate(0);
      }
      if (total_doctor.length > 0) {
        setDoctorToatal(total_doctor[0].count);
      } else {
        setDoctorToatal(0);
      }
      if (pending_doctor.length > 0) {
        setDoctorPending(pending_doctor[0].count);
      } else {
        setDoctorPending(0);
      }
      if (approved_doctor.length > 0) {
        setDoctorApproved(approved_doctor[0].count);
      } else {
        setDoctorApproved(0);
      }
      if (corporate_patient.length > 0) {
        setPatientCorporate(corporate_patient[0].count);
      } else {
        setPatientCorporate(0);
      }
      if (total_patient.length > 0) {
        setPatientTotal(total_patient[0].count);
      } else {
        setPatientTotal(0);
      }
      if (pending_patient.length > 0) {
        setPatientPending(pending_patient[0].count);
      } else {
        setPatientPending(0);
      }
    } finally {
      setLoading(false);
    }
  };

  const getAppointments = async (
    params = {},
    setLoading: (loading: Boolean) => void,
    setResult: (result: AppointmentType[]) => void
  ) => {
    try {
      setLoading(true);
      const data = await $crud.post("appointments/list", params);
      setResult(data.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
    getAppointmentData();

    getAppointments(
      {
        limit,
        sort: { dateOfAppointment: -1 },
        cond: {
          status: "Approved",
          dateOfAppointment: {
            $gte: "2022-05-18T15:10:23.444Z",
          },
        },
      },
      setUpcomingAppointmentLoading,
      setUpcomingAppointments
    );

    getAppointments(
      {
        limit,
        sort: { updatedAt: -1 },
        cond: {
          status: "Completed",
        },
      },
      setCompletedAppointmentLoading,
      setCompletedAppointments
    );
  }, []);

  return (
    <Grid className="p-3" container direction="column" wrap="nowrap">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <Grid container className="p-2-all border" wrap="nowrap">
              <Grid>
                <BookOpen color="green" size={18} />
              </Grid>
              <Typography variant="h6" component={Grid} item xs>
                Appointments
              </Typography>
            </Grid>

            <Grid container spacing={2} className="p-3">
              <Grid item xs={12} md={4} sm={6}>
                <SimpleCard
                  title="Completed"
                  appointments={appointmentComplete}
                  Titleicon={<UserCheck color="green" size={14} />}
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <SimpleCard
                  title="Upcoming"
                  appointments={appointmentUpcoming}
                  Titleicon={<FastForward color="orange" size={14} />}
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <SimpleCard
                  title="Rejected"
                  appointments={appointmentRejected}
                  Titleicon={<UserX color="red" size={14} />}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        
        <Grid item xs={6}>
          <Card>
            <Grid container className="p-2-all border" wrap="nowrap">
              <Grid>
                <Users color="orange" size={18} />
              </Grid>
              <Typography variant="h6" component={Grid} item xs>
                Users
              </Typography>
            </Grid>

            <Grid container spacing={2} className="p-3">
              <Grid item xs={12} md={6} sm={6}>
                <UserCard
                  title="Doctors"
                  appointments={5}
                  Titleicon={<User color="grey" />}
                  doctorCorporate={doctorCorporate}
                  doctorTotal={doctorTotal}
                  doctorPending={doctorPending}
                  doctorApproved={doctorApproved}
                />
              </Grid>
              <Grid item xs={12} md={6} sm={6}>
                <PatientCard
                  title="Patients"
                  Titleicon={<User color="blue" />}
                  patientCorporate={patientCorporate}
                  patientPending={patientPending}
                  patientTotal={patientTotal}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Grid container className="p-2-all border" wrap="nowrap">
              <Grid>
                <FastForward color="orange" size={18} />
              </Grid>
              <Typography variant="h6" component={Grid} item xs>
                Recent Upcoming Appointments
              </Typography>
            </Grid>

            <Appointments
              classes={classes}
              appointments={upcomingAppointments}
            />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Grid container className="p-2-all border" wrap="nowrap">
              <Grid>
                <Check color="green" size={18} />
              </Grid>
              <Typography variant="h6" component={Grid} item xs>
                Recent Completed Appointments
              </Typography>
            </Grid>

            <Appointments
              classes={classes}
              appointments={completedAppointments}
            />
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export const states: ReactStateDeclaration[] = [
  {
    url: "/dashboard",
    name: "dashboard",
    data: {
      title: "Dashboard",
      loggedIn: true,
    },
    component: Dashboard,
  },
];

function Appointments({
  appointments,
  classes,
}: {
  appointments: AppointmentType[];
  classes: any;
}) {
  return (
    <Grid container spacing={3} className="p-3">
      {appointments.map((appointment, index) => (
        <Grid item xs={12} md={6} sm={6} key={index}>
          <Grid className={classNames("border")}>
            <Grid container className="p-2-all" wrap="nowrap">
              <Grid item xs={12} md={4} sm={6}>
                <Typography
                  variant="h6"
                  component={Grid}
                  item
                  xs
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Patient
                </Typography>
                <Typography variant="subtitle1" component={Grid} item xs>
                  {appointment?.patient_details?.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Typography
                  variant="h6"
                  component={Grid}
                  item
                  xs
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Doctor
                </Typography>
                <Typography variant="subtitle1" component={Grid} item xs>
                  {appointment?.doctor_details?.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Typography
                  variant="h6"
                  component={Grid}
                  item
                  xs
                  style={{
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  Time
                </Typography>
                <Typography variant="subtitle1" component={Grid} item xs>
                  {moment(appointment.dateOfAppointment).format(
                    "DD-MM-YYYY HH:mm"
                  )}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
