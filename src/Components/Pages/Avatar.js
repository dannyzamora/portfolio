import React, {Component} from "react";



import {
    Avatar,
    Grid,
    withStyles
} from "@material-ui/core";


const styles = theme => ({

    bigAvatar: {
        width: 150,
        height: 150,
        margin: 'auto',
        marginBottom: '10px'

    }
});

const Pages = ({classes}) => 
   

   
        <Avatar
            className={classes.bigAvatar}
            alt="Danny"
            src={require('../../assets/dan.jpeg')} />



export default withStyles(styles)(Pages)
