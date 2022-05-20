import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { UISref } from "@uirouter/react";

const useStyles = makeStyles({
  drawer: {
    width: 240,
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      width: 240,
      boxSizing: "border-box",
    },
  },
});

export function Sidenav() {
  const classes = useStyles();

  const links = [
    {
      label: "Dashboard",
      link: "dashboard",
    },
    {
      label: "Doctors",
      link: "doctors",
    },
    {
      label: "Patients",
      link: "patients",
    },
    {
      label: "Appointments",
      link: "appointments",
    },
    {
      label: "Corporate Accounts",
      link: "corporateaccount",
    },
    {
      label: "Transactions",
      link: "transactions",
    },
    {
      label: "Enquiries",
      link: "enquiry",
    },
    {
      label: "CMS",
      link: "cms",
    },
    {
      label: "Audit Logs",
      link: "auditlogs",
    },
    {
      label: "Settings",
      link: "settings",
    },
  ];

  return (
    <Drawer
      classes={{ root: classes.drawer }}
      variant="permanent"
      anchor="left"
    >
      <img
        src={require("assets/images/logo.png")}
        className="p-3 mx-auto"
        style={{ width: 200 }}
      />
      <Divider />
      <List className="p-0">
        {links.map((item, i) => (
          <UISref to={item.link} key={i}>
            <ListItem button>
              <Typography variant="subtitle2" className="p-2">
                {item.label}
              </Typography>
            </ListItem>
          </UISref>
        ))}
      </List>
    </Drawer>
  );
}
