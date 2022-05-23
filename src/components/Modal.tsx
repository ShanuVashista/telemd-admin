import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import { AppointmentType, UserType } from "../types";
import AppointmentInfo from "../components/AppointmentInfo";
import PatientInfo from "../components/PatientInfo";
import DoctorInfo from "../components/DoctorInfo";
// import CloseIcon from '@material-ui/icons/Close';
import {
  Grid,
  Button,
  Dialog,
  Paper,
  IconButton,
  Typography,
} from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    listView: {},
  });

export type ModalProps = {
  openModal: boolean;
  handleClose: Function;
  data: AppointmentType;
  type: string;
  userDetails: UserType;
};

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          {/* <CloseIcon /> */}
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function PatientModal(props: ModalProps) {
  let { openModal, handleClose, type, data, userDetails } = props;

  return (
    <div>
      <Dialog
        onClose={() => handleClose}
        maxWidth="md"
        fullWidth
        aria-labelledby="customized-dialog-title"
        open={openModal}
      >
        <DialogTitle id="customized-dialog-title" onClose={() => handleClose}>
          {type === "all" && "Appointment Title"}
          {type === "doctor" && "Doctor Info"}
          {type === "patient" && "Patient Info"}
        </DialogTitle>
        <DialogContent dividers>
          {/* appointment section start here */}
          {type == "all" && (
            <Grid container spacing={3}>
              <Grid item sm={12} className="appointment-list">
                <AppointmentInfo selectedAppointment={data} />
              </Grid>
            </Grid>
          )}

          <Grid container spacing={3}>
            {/* patient section start here */}
            {(type === "all" || type === "patient") && (
              <Grid sm={type == "all" ? 6 : 12} item>
                {type === "all" && (
                  <Typography variant="h5">Patient Info:</Typography>
                )}
                <PatientInfo
                  patientInfo={
                    (type === "patient" && userDetails ? userDetails : null) ||
                    (type === "all" && data ? data.patient_details : null)
                  }
                />
              </Grid>
            )}
            {/* doctor section start here */}
            {(type === "all" || type === "doctor") && (
              <Grid sm={type == "all" ? 6 : 12} item>
                {type === "all" && (
                  <Typography variant="h5">Doctor Info:</Typography>
                )}
                <DoctorInfo
                  doctorInfo={
                    (type === "doctor" && userDetails ? userDetails : null) ||
                    (type === "all" && data ? data.patient_details : null)
                  }
                />
              </Grid>
            )}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => handleClose()} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
