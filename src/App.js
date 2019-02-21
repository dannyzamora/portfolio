import React, { Component,Fragment } from 'react';
import {Header,Footer} from './Components/Layouts'
import Pages from './Components/Pages'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  
  render() {
    return (
      <Fragment>
      <CssBaseline />
  

        <Header />
        <Pages 
        />
        <Footer />
          
        </Fragment>

    );
  }
}

export default App;
