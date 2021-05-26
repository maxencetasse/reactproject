import React from "react";
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Sein from './pages/sein';
import MenuList from './components/MenuList';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <div>
      <Router history={history}>    
        <MenuList></MenuList>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/Sein">
            <Sein />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
