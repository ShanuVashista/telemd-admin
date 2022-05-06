import React from "react";
import {Grid} from "@material-ui/core";
import {ReactStateDeclaration} from "@uirouter/react";

export function Dashboard(){
    return <Grid className="p-3">Dashboard</Grid>
}


export const states: ReactStateDeclaration[] = [
    {
        url: "/dashboard",
        name: "dashboard",
        data: {
            title: "Dashboard",
            loggedIn: true
        },
        component: Dashboard
    }
];
