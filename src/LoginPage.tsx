import { ReactStateDeclaration, UISref } from "@uirouter/react";
import * as React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { $user, LoginParams } from "./factories/UserFactory";
import { $state } from "./router";

const useStyles = makeStyles((theme) => ({
  head: {
    height: "100px",
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    height: 150,
  },
}));

export function LoginPage() {
  const classes = useStyles({});

  const rememberedCredentials = $user.getRememberedCredentials();

  const [params, setParams] = useState<LoginParams>(
    rememberedCredentials || {
      email: "",
      password: "",
    }
  );

  const [remember, setRemember] = useState(!!rememberedCredentials);

  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      await $user.login(params);
      const user = await $user.current();
      if (remember) {
        $user.rememberCredentials(params);
      } else {
        $user.forgetCredentials();
      }
      $state.go("dashboard");
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  const clearValues = () => {
    setParams({
      email: "",
      password: "",
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

  return (
    <Grid item xs container justify="center" alignContent="center">
      <Grid item xs={12} sm={5} md={4} className="p-3">
        <Grid container direction="column" wrap="nowrap">
          <Card
            component={"form"}
            onSubmit={(e) => {
              e.preventDefault();
              login();
            }}
          >
            <Grid container alignContent="center" justify="center">
              <img
                src={require("assets/images/logo.png")}
                className={classes.logo}
              />
            </Grid>
            <Grid
              container
              direction="column"
              wrap="nowrap"
              className="p-2 p-2-all"
            >
              <Grid>
                <Typography className="mb-2">Username / Email</Typography>
                <TextField
                  fullWidth
                  size="small"
                  name="username"
                  variant="outlined"
                  value={params.email}
                  placeholder="Email Address"
                  onChange={(e) => setParam("email", e.target.value)}
                />
              </Grid>
              <Grid>
                <Typography className="mb-2">Password</Typography>
                <TextField
                  fullWidth
                  size="small"
                  type="password"
                  variant="outlined"
                  placeholder="Password"
                  value={params.password}
                  onChange={(e) => setParam("password", e.target.value)}
                />
              </Grid>
              <Grid>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={remember}
                      onChange={(e) => setRemember(e.target.checked)}
                      name="remember_me"
                      color="primary"
                    />
                  }
                  label="Remember Me"
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
                  {loading ? "Logging In" : "Submit"}
                </Button>
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
    url: "/",
    name: "login",
    data: {
      title: "Login",
      loggedOut: true,
    },
    component: LoginPage,
  },
];
