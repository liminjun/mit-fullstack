import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <div>
            <Main></Main>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;
