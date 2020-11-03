import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import logo from './assets/logo.svg';
import './assets/App.css';

import Home from './containers/home';
import Practice from './containers/practice';
import Contact from './containers/contact'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <>
            <Route exact path='/React-pages/' component={Home} />
            <Route exact path='/React-pages/practice' component={Practice} />
            <Route exact path='/React-pages/contact' component={Contact} />
          </>
        </Router>
      </div>
    );
  }
}

export default App;
