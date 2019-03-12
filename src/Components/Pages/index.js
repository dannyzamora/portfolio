import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Av from './Avatar'


import {
    Paper,
    Grid
} from "@material-ui/core";
const styles = theme => ({
    paper: {
        padding: theme.spacing.unit *2,
        overflowY: 'auto',
        [theme.breakpoints.up('sm')]: {
          marginTop: 5,
          height: 'calc(100% - 10px)'
        },
        [theme.breakpoints.down('xs')]: {
          marginTop: 5,
          height: '100%'
        },
    
      },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },
    container: {
        [theme.breakpoints.up('sm')]: {
          height: 'calc(100% - 64px - 48px)'
        },
        [theme.breakpoints.down('xs')]: {
          height: 'calc(100% - 56px - 48px)'
        }
    
    
      },
    item: {
        [theme.breakpoints.up('sm')]: {
          height: '100%'
        }
    }
})
const Pages = ({classes}) =>
    <Fragment>
       
        <Grid container className={classes.container}>
        
            <Grid item className={classes.item} xs={12} >

                <Paper className={classes.paper}>
                <Av />
                </Paper>


            </Grid>
        </Grid>
    </Fragment>





export default withStyles(styles)(Pages)
