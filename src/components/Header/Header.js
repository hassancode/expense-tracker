import React from 'react';
import { Typography } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export const Header = () => {
    const classes = useStyles();
    return (

        <div className={classes.root}>
            <AppBar position="static" color="secondary">
            <Toolbar>

                <Typography variant="h6" className={classes.title}>
                    Expense Tracker
          </Typography>

            </Toolbar>
        </AppBar>
        </div>
    )
} 