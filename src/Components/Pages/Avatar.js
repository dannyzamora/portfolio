import React, {Component} from "react";



import {
    Avatar,
    Grid,
    withStyles
} from "@material-ui/core";


const styles = theme => ({

    bigAvatar: {
        width: 250,
        height: 250,
        margin: 5,

    }
});

const Pages = ({classes}) => 
   

    <Grid container justify='center'>
        <Avatar
            className={classes.bigAvatar}
            alt="Danny"
            src={require('../../assets/dan.jpeg')} />


    </Grid>

export default withStyles(styles)(Pages)
