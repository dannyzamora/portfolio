import React, { Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Av from './Avatar'
import { IconContext } from "react-icons";
import { FaRegFilePdf } from "react-icons/fa";

import {
    Paper,
    Tab,
    Tabs,
    Typography
} from "@material-ui/core";
const styles = theme => ({
    paper: {
        padding: theme.spacing.unit * 2,
        overflowY: 'auto',
        [theme.breakpoints.up('xs')]: {
            // marginTop: 5,
            height: '100%'
        },
        [theme.breakpoints.up('sm')]: {
            height: 'calc(100% - 80px - 72px)'
        },
        [theme.breakpoints.down('xs')]: {
            height: 'calc(100% - 78px - 50.4px)'
        }

    },
    '@global': {
        'html, body, #root': {
            height: '100%'
        }
    },

})


export default withStyles(styles)((
    {
        classes,
        selects,
        onSelect,
        picked
    }

) => {

    const index = picked
        ? selects.findIndex(group => group === picked)
        : 0

    const handleChange = (e, index) =>

        onSelect(selects[index])
    console.log(index + picked);


    return <Fragment>



        <Paper className={classes.paper} >
            <Av />
            <Tabs
                textColor='primary'
                centered
                value={index}
                onChange={handleChange}>
                <Tab label="About"
                    style={{ fontSize: '20px' }}
                />
                <Tab label="Projects"
                    style={{ fontSize: '20px' }}
                />
                <Tab label="Resume"
                    style={{ fontSize: '20px' }}

                />
            </Tabs>


            {picked == 'About'
                ?
                <Typography align='center' variant='subtitle1' style={{ marginTop: '15px' }}>
                    About
                </Typography >
                : picked == 'Projects'
                    ?
                    <Typography align='center' variant='subtitle1' style={{ marginTop: '15px' }}>
                        Coming Soon <br />

                    </Typography >
                    :
                    <IconContext.Provider value={{  color: 'white',size: "4em", className: "global-class-name" }}>
                        <div style ={{textAlign: "center",marginTop: '20px'}}>
                            <FaRegFilePdf />
                        </div>
                    </IconContext.Provider>

            }





        </Paper>





    </Fragment>



}
)
