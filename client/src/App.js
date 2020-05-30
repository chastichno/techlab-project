import React, { Component } from 'react';

import { Router, View } from "react-navi";

import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authActions';
import routes from './routes'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';





class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Router routes={routes}>
          <View />
        </Router>
      </Provider>
    );
  }
}

export default App;
