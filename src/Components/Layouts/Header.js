import React from 'react'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'



const styles = theme =>( {
  a: {
    link: {
      color: 'red'
    }
  },
  typo:{


  }

  
})


export default withStyles(styles)(({ classes }) =>

 (
  
  <AppBar position="static"  >
    <Toolbar >
      <Typography 
      align = 'center' 
      variant="display3" 
      color="inherit" 
      style={{ flex: 1 }}
      >
        Danny Zamora
          </Typography >
      

    </Toolbar>
  </AppBar>))