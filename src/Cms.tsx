import React from "react";
import { Grid } from "@material-ui/core";
import { ReactStateDeclaration } from "@uirouter/react";

export function Cms() {
  return <Grid className="p-3">CMS</Grid>;
}

export const states: ReactStateDeclaration[] = [
  {
    url: "/cms",
    name: "cms",
    data: {
      title: "cms",
      loggedIn: true,
    },
    component: Cms,
  },
];
