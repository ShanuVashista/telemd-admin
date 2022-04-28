import React, { useEffect, useState } from "react";
import { Grid, IconButton, LinearProgress, Menu, MenuItem, Paper, TextField, Typography } from "@material-ui/core";
import { ReactStateDeclaration } from "@uirouter/react";
import { $crud } from "./factories/CrudFactory";
import { UserType, AppointmentType } from "./types";
import { MoreVertical } from "react-feather";
import moment from "moment";
import { Pagination } from "@material-ui/lab";
import InfoModal from './components/Modal'

export function Patients() {
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(1);
    const [patients, setPatients] = useState<UserType[]>([]);
    const [loading, setLoading] = useState<Boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [appointmentData, setAppointmentData] = useState<AppointmentType>();
    const [selectedPatientId, setSelectedPatientId] = useState<string>();
    const [selectedPatientDetails, setSelectedPatientDetails] = useState<UserType>();

    const openMenu = (event: React.MouseEvent<HTMLButtonElement>, patientId: string) => {
        setSelectedPatientId(patientId);
        setAnchorEl(event.currentTarget);
    };

    const close = () => {
        setAnchorEl(null);
    };

    const handleClose = () => {
        setOpenModal(false);
    };

    const [openModal, setOpenModal] = React.useState(false);
    const handleClickOpen = (selectedPatientId) => {
        let selectedPatient = patients.find((singleDocotor) => singleDocotor.id === selectedPatientId);
        setSelectedPatientDetails(selectedPatient);
        setOpenModal(true);
    };

    const getPatients = async () => {
        try {
            setLoading(true);
            const data = await $crud.post("user/list", {
                page,
                limit: 10,
                cond: { role_id: "patient" }
            })
            setPatients(data.data);
            setPage(data.page);
            setTotalPage(data.totalPages);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getPatients();
    }, [page, totalPage]);

    return <Grid className="p-3" container direction="column" wrap="nowrap">
        <Grid
            container
            wrap="nowrap"
            direction="column"
            component={Paper}
        >
            <Grid container alignItems="center" className="p-2-all">
                <Typography variant="h6" component={Grid} item xs className="font-weight-bold pl-3">
                    Patients List
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
                            <th>Profile Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>D.O.B</th>
                            <th>Fax</th>
                            <th>Mobile No.</th>
                            <th>CreatedAt</th>
                            <th className="text-right">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            patients.map((data, i) => <tr key={i} style={{ verticalAlign: "middle" }}>
                                <td>{i + 1}</td>
                                <td className="text-center">
                                    <img src={data.profile_photo} className="border"
                                        style={{ width: 50, height: 50, objectFit: "contain" }} />
                                </td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.dob}</td>
                                <td>{data.fax}</td>
                                <td>{data.phone}</td>
                                <td>{moment(data.createdAt).format("DD-mm-YYYY HH:mm")}</td>
                                <td className="text-right">
                                    <IconButton size="small" onClick={(event) => openMenu(event, data.id)}>
                                        <MoreVertical size={16} />
                                    </IconButton>
                                    <Menu
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={close}
                                    >
                                        <MenuItem onClick={(e) => handleClickOpen(selectedPatientId)}>View</MenuItem>
                                        <MenuItem onClick={close}>Delete</MenuItem>
                                    </Menu>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </Grid>
            {
                !loading && patients ? <Grid container justify="flex-end" className="p-2">
                    <Pagination
                        count={totalPage}
                        page={page}
                        onChange={(e, page) => setPage(page)}
                        variant="outlined"
                        shape="rounded"
                    />
                </Grid> : ""
            }

        </Grid>
        <InfoModal openModal={openModal} handleClose={handleClose} type='patient' userDetails={selectedPatientDetails} data={appointmentData}/>
    </Grid>
}


export const states: ReactStateDeclaration[] = [
    {
        url: "/patients",
        name: "patients",
        data: {
            title: "Patients List",
            loggedIn: true
        },
        component: Patients
    }
];
