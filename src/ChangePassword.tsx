import { ReactStateDeclaration } from "@uirouter/react";
import * as React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { $crud } from "./factories/CrudFactory";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import { Eye, EyeOff } from "react-feather";

function ChangePassword() {
  const [loading, setLoading] = useState(false);

  const [params, setParams] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [showCurrentPassword, setShowCurrentPassword] =
    useState<Boolean>(false);

  const [showConfirmNewPassword, setShowConfirmNewPassword] =
    useState<Boolean>(false);

  const clearValues = () => {
    setParams({
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };

  const setParam = (name: string, value: any) => {
    setParams((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const changePassword = async () => {
    try {
      setLoading(true);
      const data = await $crud.post("user/password-change", params);
      console.log("data", data.data);
    } finally {
      setLoading(false);
    }
  };

  const handleClickShowPassword = () => {
    setShowCurrentPassword(showCurrentPassword === false ? true : false);
  };

  const handleClickShowConfirmNewPassword = () => {
    setShowConfirmNewPassword(showConfirmNewPassword === false ? true : false);
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  return (
    <Grid item xs container justify="center">
      <Grid item xs={12} sm={5} md={12} className="p-3">
        <Grid container direction="column" wrap="nowrap">
          <Card
            component={"form"}
            onSubmit={(e) => {
              e.preventDefault();
              changePassword();
            }}
          >
            <Grid
              container
              alignContent="center"
              justify="center"
              className="p-3"
            >
              <Typography
                variant="h6"
                component={Grid}
                item
                xs
                className="font-weight-bold pl-3"
              >
                Change Password
              </Typography>
            </Grid>
            <Grid item xs container justify="center">
              <Grid item xs={12} sm={5} md={6} className="p-3 border mb-3">
                <Grid container direction="column" wrap="nowrap">
                  <Grid
                    container
                    direction="column"
                    wrap="nowrap"
                    className="p-2 p-2-all"
                  >
                    <Grid>
                      <Typography className="mb-2">Current Password</Typography>
                      <TextField
                        fullWidth
                        size="small"
                        type={showCurrentPassword ? "text" : "password"}
                        name="currentPassword"
                        variant="outlined"
                        value={params.currentPassword}
                        placeholder="Current Password"
                        onChange={(e) =>
                          setParam("currentPassword", e.target.value)
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showCurrentPassword ? <Eye /> : <EyeOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid>
                      <Typography className="mb-2">New Password</Typography>
                      <TextField
                        fullWidth
                        size="small"
                        type="password"
                        variant="outlined"
                        placeholder="New Password"
                        name="newPassword"
                        value={params.newPassword}
                        onChange={(e) =>
                          setParam("newPassword", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid>
                      <Typography className="mb-2">
                        Confirm New Password
                      </Typography>
                      <TextField
                        fullWidth
                        size="small"
                        type={showConfirmNewPassword ? "text" : "password"}
                        variant="outlined"
                        placeholder="Confirm New Password"
                        value={params.confirmNewPassword}
                        name="confirmNewPassword"
                        onChange={(e) =>
                          setParam("confirmNewPassword", e.target.value)
                        }
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowConfirmNewPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showConfirmNewPassword ? <Eye /> : <EyeOff />}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>

                    <Grid container justify="flex-end">
                      <Button
                        onClick={clearValues}
                        type="button"
                        variant="contained"
                        className="mr-2"
                        color={"primary"}
                      >
                        Clear
                      </Button>
                      <Button
                        disabled={loading}
                        type="submit"
                        variant="contained"
                        color={"primary"}
                      >
                        {loading ? "Change-Password" : "Submit"}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}

export const states: ReactStateDeclaration[] = [
  {
    url: "/change-password",
    name: "change-password",
    data: {
      title: "ChangePassword",
      loggedIn: true,
    },
    component: ChangePassword,
  },
];
