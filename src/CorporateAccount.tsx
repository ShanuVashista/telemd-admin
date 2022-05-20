
import React from "react";
import { Grid } from "@material-ui/core";
import { ReactStateDeclaration } from "@uirouter/react";

export function CorporateAccount() {
  return <Grid className="p-3">Corporate Account</Grid>;
}

export const states: ReactStateDeclaration[] = [
  {
    url: "/corporateaccount",
    name: "corporateaccount",
    data: {
      title: "CorporateAccount",
      loggedIn: true,
    },
    component: CorporateAccount,
  },
];
