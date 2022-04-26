import React from "react";
import {Divider, Drawer, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import {$state} from "./router";

const useStyles = makeStyles(({
   drawer:{
       width: 240,
       flexShrink: 0,
       "& .MuiDrawer-paper": {
           width: 240,
           boxSizing: "border-box",
       }
   }
}));

export function Sidenav(){
    const classes = useStyles();

    const links = [
        {
            label: "Dashboard",
            click: () => $state.go("dashboard"),
        },
        {
            label: "Doctors",
            click: () => $state.go("doctors"),
        },
        {
            label: "Patients",
            click: () => $state.go("dashboard"),
        },
        {
            label: "Appointments",
            click: () => $state.go("dashboard"),
        },
        {
            label: "Corporate Accounts",
            click: () => $state.go("dashboard"),
        },
        {
            label: "Transactions",
            click: () => $state.go("dashboard"),
        },
        {
            label: "Enquiries",
            click: () => $state.go("dashboard"),
        },
        {
            label: "CMS",
            click: () => $state.go("dashboard"),
        },
        {
            label: "Audit Logs",
            click: () => $state.go("dashboard"),
        },
        {
            label: "Settings",
            click: () => $state.go("dashboard"),
        },
    ];

    return <Drawer
        classes={{root: classes.drawer}}
        variant="permanent"
        anchor="left"
    >
        <img src={require("assets/images/logo.png")} className="p-3 mx-auto" style={{width: 200}}/>
        <Divider/>
        <List className="p-0">
            {
                links.map((item) => (
                    <ListItem button key={item.label} onClick={item.click}>
                        <Typography variant="subtitle2" className="p-2">
                            {item.label}
                        </Typography>
                    </ListItem>
                ))
            }
        </List>
    </Drawer>
}