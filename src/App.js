import React, { Component } from 'react';
import './App.css';

import DummyComponent from './components/dummyComponent'

//Redux dependencies
import { Provider } from 'react-redux';
import Store from './store'


class App extends Component {
  
  render() {
    return (
      <Provider store={Store}>
        <div className="App">
          <DummyComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
