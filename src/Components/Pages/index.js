import React, { Fragment } from "react";



import {
    Avatar,
    Grid,
    Typography
} from "@material-ui/core";
const styles = {

    bigAvatar: {
        width: 250,
        height: 250,
        margin: 5,

    },
    item: {
        margin: 5,
        marginLeft: 'calc(50% - 125px)'
    }
};
const Pages = () =>
    <Fragment>
        <Grid container justify='center'>
            <Avatar

                style={styles.bigAvatar}
                alt="Danny"
                src={require('../../assets/dan.jpeg')} />


        </Grid>
    </Fragment>





export default Pages
