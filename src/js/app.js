/**
 * Created by jamesnarey on 13/06/2016.
 */
import 'whatwg-fetch';
import Cookies from 'js-cookie';

import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from './components/AppBar'
import AppBarExampleIcon from './components/AppBar'
// import MultipleChoiceQuestion from './components/MultipleChoice'
import QuestionCard from './components/QuestionCard'
import Page from './components/Page'

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {/*<div>*/}
    {/*<AppBarExampleIcon/>*/}
    {/*<QuestionCard/>*/}
    {/*</div>*/}
    <Page/>
  </MuiThemeProvider>
);


ReactDOM.render(
  <App />,
  document.getElementById('app')
);
