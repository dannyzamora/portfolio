import React, { Component } from 'react'
import { AppBar, withStyles } from '@material-ui/core'
import { IconContext, } from "react-icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const styles = theme=>( {
  div:{   
          textAlign: "center",
          padding:"5px"
  },
  a: {
      marginLeft: "5px",
      marginRight: "5px"
  }

})
class Footer extends Component {

    render() {
        const { classes } = this.props
        return (

            <AppBar position="static"   >


                <IconContext.Provider value={{ color: 'white', size: "4em", className: "global-class-name" }}>
                    
                        <div className={classes.div} target="_blank">
                            <a className={classes.a} href="https://www.linkedin.com/in/danny-zamora">
                                <FaLinkedinIn />
                            </a>

                            <a className={classes.a} href="https://github.com/dannyzamora">
                                <FaGithub />
                            </a>



                            <a className={classes.a} href="mailto:dannyzamora.js@gmail.com">
                                <MdEmail />
                            </a>
                        </div>
                        
                </IconContext.Provider>


            </AppBar>
        )
    }

}
export default withStyles(styles)(Footer)
        /**import React from 'react'
import { AppBar, Toolbar, Typography, withStyles, Grid } from '@material-ui/core'
import { IconContext, } from "react-icons";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


const styles = {}

export default withStyles(styles)(({ classes }) =>

    (
        <AppBar position="static"   >


            <IconContext.Provider value={{ color: 'white', size: "2em", className: "global-class-name" }}>
                <Grid container spacing={6} alignItems= 'center'>
                    <Grid item xs={2}>
                        <a href="https://www.linkedin.com/in/danny-zamora">
                            <FaLinkedinIn />
                        </a>
                    </Grid>
                    <Grid item xs={2}>
                        <a href="https://github.com/dannyzamora">
                            <FaGithub />
                        </a>
                    </Grid>

                    <Grid item xs={2}>
                        <a href="mailto:dannyzamora.js@gmail.com">
                            <MdEmail />
                        </a>
                    </Grid>

                </Grid>

            </IconContext.Provider>


        </AppBar>)) */