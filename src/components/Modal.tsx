import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
// import CloseIcon from '@material-ui/icons/Close';
import { Grid, Button, Dialog, Paper, IconButton, Typography } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    listView: {

    }
  });

export type ModalProps = {
  openModal: boolean;
  handleClose: Function;
  appointments:appointments
}

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
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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

export default function PatientModal({ openModal, handleClose, appointments }: ModalProps) {
  return (
    <div>
      <Dialog onClose={() => handleClose} maxWidth="sm" fullWidth aria-labelledby="customized-dialog-title" open={openModal}>
        <DialogTitle id="customized-dialog-title" onClose={() => handleClose}>
          Appointment Title
        </DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item sm={12} className="appointment-list">
              <div className="appointment-content">
                <Typography variant="h6">Name</Typography>
                {/* <span>:</span> */}
                <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
              </div>
              <div className="appointment-content">
                <Typography variant="h6">Patient Id</Typography>
                {/* <span>:</span> */}
                <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
              </div>
              <div className="appointment-content">
                <Typography variant="h6">Appointment Type</Typography>
                {/* <span>:</span> */}
                <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
              </div>
              <div className="appointment-content">
                <Typography variant="h6">Status</Typography>
                {/* <span>:</span> */}
                <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
              </div>
              <div className="appointment-content">
                <Typography variant="h6">Is Emergency</Typography>
                {/* <span>:</span> */}
                <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid sm={6} item>
              <Typography variant="h5">
                Patient Info:
              </Typography>
              <div className="appointment-details">
                <div className="appointment-content">
                  <Typography variant="h6">Name:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
                <div className="appointment-content">
                  <Typography variant="h6">Patient Id:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
                <div className="appointment-content">
                  <Typography variant="h6">Phone:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
                <div className="appointment-content">
                  <Typography variant="h6">Profile Photo:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
                <div className="appointment-content">
                  <Typography variant="h6">Date:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
              </div>
            </Grid>
            <Grid sm={6} item>
              <Typography variant="h5">
                Doctor Info:
              </Typography>
              <div className="appointment-details">
                <div className="appointment-content">
                  <Typography variant="h6">Name:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
                <div className="appointment-content">
                  <Typography variant="h6">Doctor Id:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
                <div className="appointment-content">
                  <Typography variant="h6">Phone:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
                <div className="appointment-content">
                  <Typography variant="h6">Profile Photo:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
                <div className="appointment-content">
                  <Typography variant="h6">Date:</Typography>
                  <Typography variant="body1" style={{ marginLeft: 10 }}>test</Typography>
                </div>
              </div>
            </Grid>
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
