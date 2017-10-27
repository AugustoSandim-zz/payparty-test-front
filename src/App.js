import React, { Component } from 'react';
import List from './components/List';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { list } from './reducers/list';


const store = createStore(list, applyMiddleware(thunkMiddleware));

class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="main">

          <List login={this.props.params.login} store={ store } />

        </div>
      </div>
    );
  }
}

export default App;
