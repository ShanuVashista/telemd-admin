import React, { useEffect, useState } from 'react';
import { ReactStateDeclaration } from '@uirouter/react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from './components/Dashboard/cards';
import { Card, Typography } from '@material-ui/core';
import UserCard from './components/Dashboard/userCards';
import {
  Users,
  BookOpen,
  Zap,
  FastForward,
  UserCheck,
  UserX,
  User,
  Check,
} from 'react-feather';
import { AppointmentType } from './types';
import { $crud } from './factories/CrudFactory';
import classNames from 'classnames';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 5,
    },
    paper: {
      padding: theme.spacing(2),
      //   textAlign: 'center',
      background: 'F1EEE9',
      color: theme.palette.text.secondary,
    },
  })
);

export function Dashboard() {
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

  const getAppointments = async (
    params = {},
    setLoading: (loading: Boolean) => void,
    setResult: (result: AppointmentType[]) => void
  ) => {
    try {
      setLoading(true);
      const data = await $crud.post('appointments/list', params);
      setResult(data.data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAppointments(
      {
        limit,
        sort: { dateOfAppointment: -1 },
        cond: {
          status: 'Approved',
          dateOfAppointment: {
            $gte: '2022-05-18T15:10:23.444Z',
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
          status: 'Completed',
        },
      },
      setCompletedAppointmentLoading,
      setCompletedAppointments
    );
  }, []);

  return (
    <Grid className='p-3' container direction='column' wrap='nowrap'>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <Grid container className='p-2-all border' wrap='nowrap'>
              <Grid>
                <BookOpen color='green' size={18} />
              </Grid>
              <Typography variant='h6' component={Grid} item xs>
                Appointments
              </Typography>
            </Grid>

            <Grid container spacing={2} className='p-3'>
              <Grid item xs={12} md={4} sm={6}>
                <SimpleCard
                  title='Completed'
                  appointments={5}
                  Titleicon={<UserCheck color='green' size={14} />}
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <SimpleCard
                  title='Upcoming'
                  appointments={10}
                  Titleicon={<FastForward color='orange' size={14} />}
                />
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <SimpleCard
                  title='Rejected'
                  appointments={3}
                  Titleicon={<UserX color='red' size={14} />}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <Grid container className='p-2-all border' wrap='nowrap'>
              <Grid>
                <Users color='orange' size={18} />
              </Grid>
              <Typography variant='h6' component={Grid} item xs>
                Users
              </Typography>
            </Grid>

            <Grid container spacing={2} className='p-3'>
              <Grid item xs={12} md={6} sm={6}>
                <UserCard
                  title='Doctors'
                  appointments={5}
                  Titleicon={<User color='grey' />}
                />
              </Grid>
              <Grid item xs={12} md={6} sm={6}>
                <UserCard
                  title='Patients'
                  appointments={10}
                  Titleicon={<User color='blue' />}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <Grid container className='p-2-all border' wrap='nowrap'>
              <Grid>
                <FastForward color='orange' size={18} />
              </Grid>
              <Typography variant='h6' component={Grid} item xs>
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
            <Grid container className='p-2-all border' wrap='nowrap'>
              <Grid>
                <Check color='green' size={18} />
              </Grid>
              <Typography variant='h6' component={Grid} item xs>
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
    url: '/dashboard',
    name: 'dashboard',
    data: {
      title: 'Dashboard',
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
    <Grid container spacing={3} className='p-3'>
      {appointments.map((appointment, index) => (
        <Grid item xs={12} md={6} sm={6} key={index}>
          <Grid className={classNames('border')}>
            <Grid container className='p-2-all' wrap='nowrap'>
              <Grid item xs={12} md={4} sm={6}>
                <Typography
                  variant='h6'
                  component={Grid}
                  item
                  xs
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                >
                  Patient
                </Typography>
                <Typography variant='subtitle1' component={Grid} item xs>
                  {appointment?.patient_details?.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Typography
                  variant='h6'
                  component={Grid}
                  item
                  xs
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                >
                  Doctor
                </Typography>
                <Typography variant='subtitle1' component={Grid} item xs>
                  {appointment?.doctor_details?.name}
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} sm={6}>
                <Typography
                  variant='h6'
                  component={Grid}
                  item
                  xs
                  style={{
                    fontWeight: 'bold',
                    fontSize: '1rem',
                  }}
                >
                  Time
                </Typography>
                <Typography variant='subtitle1' component={Grid} item xs>
                  {moment(appointment.dateOfAppointment).format(
                    'DD-MM-YYYY HH:mm'
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
