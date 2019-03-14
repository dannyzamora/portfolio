import React, { Component,Fragment } from 'react';
import {Header,Footer} from './Components/Layouts'
import Pages from './Components/Pages'
import CssBaseline from '@material-ui/core/CssBaseline'

class App extends Component {
  state ={

    selects: ['About','Projects','Resume'],
    picked: 'About'

  }

  handleSelect = picked =>
  this.setState({
    picked
  })

  render() {
   const {selects,picked} = this .state
    return (
      <Fragment>
      <CssBaseline />
  

        <Header />
        <Pages 
        selects ={selects}
        picked ={picked}
        onSelect={this.handleSelect}


        />
        <Footer />
          
        </Fragment>

    );
  }
}

export default App;
