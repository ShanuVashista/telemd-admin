import React from "react";
import { Grid } from "@material-ui/core";
import { ReactStateDeclaration } from "@uirouter/react";

export function AuditLogs() {
  return <Grid className="p-3">Audit Logs</Grid>;
}

export const states: ReactStateDeclaration[] = [
  {
    url: "/auditlogs",
    name: "auditlogs",
    data: {
      title: "AuditLogs",
      loggedIn: true,
    },
    component: AuditLogs,
  },
];
