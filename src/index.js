import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
//import {red,amber} from '@material-ui/core/colors'
import * as serviceWorker from './serviceWorker';
const  theme = createMuiTheme({
    typography: {
        fontFamily: "'Courier New'",
    }
  
})
   
ReactDOM.render(
<MuiThemeProvider theme = {theme}>
<App />
</MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();