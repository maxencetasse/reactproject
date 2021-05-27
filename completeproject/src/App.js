//Importation des modules
import React from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';



//Importation des composants
import DrawerLeft from "./components/layout/DrawerLeft";

function App() {
  return (
    <div>
      <Router>
        <DrawerLeft></DrawerLeft>
      </Router>
    </div>
  );
}

export default App;
