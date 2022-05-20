import React from "react";
import { Grid } from "@material-ui/core";
import { ReactStateDeclaration } from "@uirouter/react";

export function Enquiry() {
  return <Grid className="p-3">Enquiry</Grid>;
}

export const states: ReactStateDeclaration[] = [
  {
    url: "/enquiry",
    name: "enquiry",
    data: {
      title: "Enquiry",
      loggedIn: true,
    },
    component: Enquiry,
  },
];
