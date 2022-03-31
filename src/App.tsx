import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './containers/Home';
import Categories from './containers/Categories';
import Questions from './containers/Questions';
import Record from './containers/Record';
import './App.scss';

const App = () => (
  <RecoilRoot>
    <Router>
      <div className="row center-xs">
        <div className="col-xs-12">
          <Nav />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/categories" exact>
              <Categories />
            </Route>
            <Route path="/questions" exact>
              <Questions />
            </Route>
            <Route path="/record" exact>
              <Record />
            </Route>
            <Route path="/">
              <h1>Page not found</h1>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  </RecoilRoot>
);

export default App;
