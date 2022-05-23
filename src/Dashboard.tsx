import React from "react";
import { ReactStateDeclaration } from "@uirouter/react";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./components/Dashboard/cards";
import { Card, Typography } from "@material-ui/core";
import UserCard from "./components/Dashboard/userCards";
import { Users, BookOpen, Zap, FastForward, UserCheck, UserX, User, Check } from "react-feather"

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
    }),
);

export function Dashboard() {
    const classes = useStyles();
    return (
        <Grid className="p-3" container direction="column" wrap="nowrap">
            <Grid container spacing={2}>
                <Grid item xs={6} >
                    <Card>
                        <Grid container className='p-2-all border' wrap='nowrap' >
                            <Grid><BookOpen color="green" size={18} /></Grid>
                            <Typography variant="h6" component={Grid} item xs>
                                Appointments
                            </Typography>
                        </Grid>

                        <Grid container spacing={2} className="p-3">
                            <Grid item xs={12} md={4} sm={6}>
                                <SimpleCard title="Completed" appointments={5} Titleicon={<UserCheck color="green" size={14} />} />
                            </Grid>
                            <Grid item xs={12} md={4} sm={6} >
                                <SimpleCard title="Upcoming" appointments={10} Titleicon={<FastForward color="orange" size={14} />} />
                            </Grid>
                            <Grid item xs={12} md={4} sm={6}>
                                <SimpleCard title="Rejected" appointments={3} Titleicon={<UserX color="red" size={14} />} />
                            </Grid>
                        </Grid>
                    </Card>

                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <Grid container className='p-2-all border' wrap='nowrap' >
                            <Grid><Users color="orange" size={18} /></Grid>
                            <Typography variant="h6" component={Grid} item xs>
                                Users
                            </Typography>
                        </Grid>

                        <Grid container spacing={2} className="p-3">
                            <Grid item xs={12} md={6} sm={6} >
                                <UserCard title="Doctors" appointments={5} Titleicon={<User color="grey" />} />
                            </Grid>
                            <Grid item xs={12} md={6} sm={6}>
                                <UserCard title="Patients" appointments={10} Titleicon={<User color="blue" />} />
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <Grid container className='p-2-all border' wrap='nowrap' >
                            <Grid><FastForward color="orange" size={18} /></Grid>
                            <Typography variant="h6" component={Grid} item xs>
                                Recent Upcoming Appointments
                            </Typography>
                        </Grid>

                        <Grid container spacing={2} className="p-3">
                            <Grid item xs={12} md={3} sm={6} >
                            <Paper className={classes.paper}>Appointment 1</Paper>
                            </Grid>
                            <Grid item xs={12} md={3} sm={6}>
                            <Paper className={classes.paper}>Appointment 2</Paper>
                            </Grid>
                            <Grid item xs={12} md={3} sm={6}>
                            <Paper className={classes.paper}>Appointment 3</Paper>
                            </Grid>
                            <Grid item xs={12} md={3} sm={6}>
                            <Paper className={classes.paper}>Appointment 4</Paper>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

                <Grid item xs={12}>
                    <Card>
                        <Grid container className='p-2-all border' wrap='nowrap' >
                            <Grid><Check color="green" size={18} /></Grid>
                            <Typography variant="h6" component={Grid} item xs>
                                Recent Completed Appointments
                            </Typography>
                        </Grid>

                        <Grid container spacing={2} className="p-3">
                            <Grid item xs={12} md={3} sm={6} >
                            <Paper className={classes.paper}>Appointment 1</Paper>
                            </Grid>
                            <Grid item xs={12} md={3} sm={6}>
                            <Paper className={classes.paper}>Appointment 2</Paper>
                            </Grid>
                            <Grid item xs={12} md={3} sm={6}>
                            <Paper className={classes.paper}>Appointment 3</Paper>
                            </Grid>
                            <Grid item xs={12} md={3} sm={6}>
                            <Paper className={classes.paper}>Appointment 4</Paper>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>

            </Grid>
        </Grid>
    )
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
