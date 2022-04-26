import React, {useEffect, useState} from "react";
import {Divider, Grid, Paper, TextField, Typography} from "@material-ui/core";
import {ReactStateDeclaration} from "@uirouter/react";
import {$crud} from "./factories/CrudFactory";

export function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [page, ] = useState(1);
    const [limit, ] = useState(10);
    const getDoctors = async () => {
        const {data} = await $crud.get("user/list", {
            page,
            limit,
            cond: {role_id: "doctors"}
        })
        setDoctors(data);
    }

    useEffect(() => {
        getDoctors();
        console.log(doctors);
    },[]);

    return <Grid className="p-3" container direction="column" wrap="nowrap">
        <Grid
            container
            wrap="nowrap"
            direction="column"
            component={Paper}
        >
            <Grid container alignItems="center" className="p-1 p-2-all">
                <Typography variant="h6" component={Grid} item xs className="font-weight-bold">
                    Doctors List
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
            <Grid className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Filed Year</th>
                        <th>Filed Inventory</th>
                        <th>Status</th>
                        <th>Filed At</th>
                        <th className="text-right">Action</th>
                    </tr>
                    </thead>
                </table>
            </Grid>
        </Grid>
    </Grid>
}


export const states: ReactStateDeclaration[] = [
    {
        url: "/doctors",
        name: "doctors",
        data: {
            title: "Doctors List",
            loggedIn: true
        },
        component: Doctors
    }
];
