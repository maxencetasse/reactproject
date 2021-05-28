//Importation des modules
import React from "react";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

//Importation des composants
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Router>
        <Layout></Layout>
      </Router>
    </div>
  );
}

export default App;
