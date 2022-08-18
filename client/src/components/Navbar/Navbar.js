
import React from 'react'
import { AppBar, Typography } from '@material-ui/core';
import useStyles from "./Styles"
import memories from '../../images/memories.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <div className={classes.appBar} position="static" color="inherit">
                    <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img className={classes.image} src={memories} alt="icon" height="60" />
                </div>
            </AppBar>
        </div>
    )
}

export default Navbar

