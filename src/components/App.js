import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route} from "react-router-dom";
import { createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

import Home from './Home.js';
import Organizer from './Organizer.js';
import Success from './Success.js';

function App() {


  const theme = createMuiTheme({

 });

  return (
    <Router>
    <ThemeProvider theme={theme}>
      <Route exact path="/" component={Home}/>
      <Route path="/organizer" component={Organizer}/>
      <Route path="/success" component={Success}/>
    </ThemeProvider>
    </Router>
  );
}

export default connect()(App)