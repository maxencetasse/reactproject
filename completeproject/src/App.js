import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Sein from './pages/sein';
import Colon from './pages/colon';
import Uterus from './pages/uterus';
import MenuList from './components/MenuList';

function App() {
  return (
    <div>
      <Router>    
        <MenuList></MenuList>
        <Switch>
          <Route path="/Sein">
            <Sein />
          </Route>
          <Route path="/Colon">
            <Colon />
          </Route>
          <Route path="/Uterus">
            <Uterus />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
