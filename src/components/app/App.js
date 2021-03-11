import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { ControlPanel, MovieList, MovieSearch, NotFound, MainMenu } from '../../components';

const App = () => {
  return (
    <Router>
      <div className="container">
        <div className="row">
          <div className="three columns banner">
            <Link to="/">
            <h4>Movie<b>App</b></h4>
            </Link>            
          </div>
          <div className="nine columns menu">
          <div className="row">
            <div className="six columns">
              <MainMenu />
            </div>
            <div className="six columns">
              <MovieSearch />
            </div>
          </div>
            
          </div>
        </div>
        <div className="row line">
          <div className="twelve columns">
            <hr />
          </div>
        </div>

        <div className="row content">
          <Switch>
            <Route path='/' exact render={() => (
              <React.Fragment>
                <MovieList />
              </React.Fragment>
            )}
            />

            <Route path='/control-panel' component={ControlPanel} />
            <Route path='*' component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
