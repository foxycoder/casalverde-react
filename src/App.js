import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/themes'
import PagesContainer from './pages/PagesContainer'

class App extends Component {
  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
         <Title content="Hello Admin"/>
         <Title content="What would you like to edit today?"/>
         <PagesContainer pages={ [] } />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
