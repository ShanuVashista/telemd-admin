import React from "react";
import { Grid } from "@material-ui/core";
import { ReactStateDeclaration } from "@uirouter/react";

export function Settings() {
  return <Grid className="p-3">Settings</Grid>;
}

export const states: ReactStateDeclaration[] = [
  {
    url: "/settings",
    name: "settings",
    data: {
      title: "Dashboard",
      loggedIn: true,
    },
    component: Settings,
  },
];
