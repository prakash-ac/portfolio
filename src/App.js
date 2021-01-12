import React from 'react';
import './App.css';
import Nav from './Nav/Nav';
import About from './About/About';
import Contact from './Contact/Contact';
import Works from './Works/Works';
import Education from './Education/Education';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const app = () => {
  return (
    <Router>
      <div className="App">
          <Nav/>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/works" component={Works}/>
            <Route path="/education" exact component={Education}/>
          </Switch>
      </div>
    </Router>
  );
}

export default app;
