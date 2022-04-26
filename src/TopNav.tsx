import {AppBar, Button, Grid, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography} from "@material-ui/core";
import * as React from "react";
import classNames from "classnames";
import {Menu as MenuIcon, User} from "react-feather";
import {$user, useCurrentUser} from "./factories/UserFactory";
import {UISref} from "@uirouter/react";
import {$state, $transition} from "./router";
import {useState} from "react";


const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText
    },
}));

export function TopNav(props = {}) {

    const classes = useStyles({});

    const user = useCurrentUser();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [hideNav, setHideNav] = useState(false);

    $transition.onSuccess({}, () => {
        if ($state.current.name === "resetPassword") {
            setHideNav(true)
        } else {
            setHideNav(false)
        }
    });

    return <AppBar elevation={1} className={classNames(classes.root)} position="static">
        <Toolbar className="pl-0">
            {/*<Typography variant="h6" component={Grid} item className="pl-3 font-weight-bold">*/}
            {/*    {$state.current.data?.title || "Page Title"}*/}
            {/*</Typography>*/}
            <Grid item xs>
                {/*<Typography variant="h6">{user?.firstname} {user?.lastname}</Typography>*/}
            </Grid>
            {
                !hideNav ?
                    <Grid item md={2} xs={2} sm={2} justify="flex-end" container>
                        <IconButton onClick={event => setAnchorEl(event.currentTarget)}
                                    color="inherit"><MenuIcon/></IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <UISref to="profile">
                                <MenuItem onClick={handleClose}>Account Information</MenuItem>
                            </UISref>
                            <UISref to="changePassword">
                                <MenuItem onClick={handleClose}>Change Password</MenuItem>
                            </UISref>
                            <UISref to="help">
                                <MenuItem onClick={handleClose}>Help</MenuItem>
                            </UISref>
                            <UISref to="login">
                                <MenuItem onClick={async () => {
                                    await $user.logout();
                                    $state.go("login");
                                }}>Logout</MenuItem>
                            </UISref>
                        </Menu>
                    </Grid>
                    : <Button color="inherit" size="medium" onClick={() => {
                        $user.logout()
                        $state.go("login")
                    }}>
                        Cancel
                    </Button>
            }

        </Toolbar>
    </AppBar>
}
