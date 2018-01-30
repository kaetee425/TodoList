import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Todo from './components/Todo';
import Login from './components/Login/Login'

class App extends Component {
  render() {
    return (
      <Router>
	      <div>
	      	<Route exact path='/' component={Login} />
	      	<Route path='/tasks' component={Todo} />
	      </div>
      </Router>
    );
  }
}

export default App;
