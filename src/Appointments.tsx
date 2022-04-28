import React, { useEffect, useState } from "react";
import { Grid, IconButton, LinearProgress, Menu, MenuItem, Paper, TextField, Typography } from "@material-ui/core";
import { ReactStateDeclaration } from "@uirouter/react";
import { $crud } from "./factories/CrudFactory";
import { AppointmentType, UserType } from "./types";
import { MoreVertical } from "react-feather";
import moment from "moment";
import { Pagination } from "@material-ui/lab";
import Chip from '@material-ui/core/Chip';
import InfoModal from "./components/Modal";

export function Appointments() {
    const [limit,] = useState(10);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [appointments, setAppointments] = useState<AppointmentType[]>([]);
    const [selectedAppointment, setSelectedAppointment] = useState<AppointmentType>();
    const [selectedAppointmentId, setSelectedAppointmentId] = useState<string>();
    const [loading, setLoading] = useState<Boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [user,setUser] = useState<UserType>();

    const openMenu = (event: React.MouseEvent<HTMLButtonElement>, appointmentId) => {
        setSelectedAppointmentId(appointmentId);
        setAnchorEl(event.currentTarget);
    };

    const close = () => {
        setAnchorEl(null);
    };

    const [openModal, setOpenModal] = React.useState(false);

    const handleClickOpen = (selectedAppointmentId) => {
        let selectedAppointmentDetails = appointments.find((singleAppointment) => singleAppointment._id === selectedAppointmentId);
        setSelectedAppointment(selectedAppointmentDetails)
        setOpenModal(true);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const getAppointments = async () => {
        try {
            setLoading(true);
            const data = await $crud.post("appointments/list", {
                page,
                limit
            })
            setAppointments(data.data);
            setPage(data.page);
            setTotalPage(data.totalPages);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAppointments();
    }, [page, limit, totalPage]);

    return <Grid className="p-3" container direction="column" wrap="nowrap">
        <Grid
            container
            wrap="nowrap"
            direction="column"
            component={Paper}
        >
            <Grid container alignItems="center" className="p-2-all">
                <Typography variant="h6" component={Grid} item xs className="font-weight-bold pl-3">
                    Appointments List
                </Typography>
                <Grid item xs md={4}>
                    <TextField
                        fullWidth
                        label="Search"
                        variant="outlined"
                        size="small"
                        color="primary"
                    />
                </Grid>
            </Grid>
            {
                loading && <LinearProgress />
            }
            <Grid className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Patient Name</th>
                            <th>Appointment Type</th>
                            <th>Date & Time</th>
                            <th>Status</th>
                            <th>IS Emergency</th>
                            <th>CreatedAt</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((data, i) => <tr key={i} style={{ verticalAlign: "middle" }}>
                                <td>{i + 1}</td>
                                <td>{data.patient_details.name}</td>
                                <td>{data.appointmentType}</td>
                                <td>{moment(data.dateOfAppointment).format("DD-mm-YYYY HH:mm")}</td>
                                <td>{data.status}</td>
                                <td className="text-center">{data.isEmergency ? <Chip label="Yes" style={{backgroundColor:'#ee57579e'}} />: <Chip label="No"  style={{backgroundColor:'#e8e82e78'}}/>}</td>
                                <td>{moment(data.updatedAt).format("DD-mm-YYYY HH:mm")}</td>
                                <td className="text-right">
                                    <IconButton size="small" onClick={(event) => openMenu(event, data._id)}>
                                        <MoreVertical size={16} />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={close}
                                    >
                                        <MenuItem onClick={(e) => handleClickOpen(selectedAppointmentId)}>View</MenuItem>
                                        <MenuItem onClick={close}>Delete</MenuItem>
                                    </Menu>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </Grid>
            <Grid container justify="flex-end" className="p-2">
                <Pagination
                    count={totalPage}
                    page={page}
                    onChange={(e, page) => setPage(page)}
                    variant="outlined"
                    shape="rounded"
                />
            </Grid>

        </Grid>
        <InfoModal openModal={openModal} handleClose={handleClose} type='all' data={selectedAppointment} userDetails={user}/>
    </Grid>
}


export const states: ReactStateDeclaration[] = [
    {
        url: "/appointments",
        name: "appointments",
        data: {
            title: "Appointments List",
            loggedIn: true
        },
        component: Appointments
    }
];
