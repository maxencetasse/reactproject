import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function ListItem(props){
  const nombre = props.value;
  /*Mettre en tant que clé l'index est une bonne pratique. 
  Cependant l'index peut causer des problèmes de performance en cas de changment d'ordre des composants.*/
  return (
    <li>
      {nombre}
    </li>
  );
}

function NumberList(props){
  const nombres = props.nombres;
  console.log(nombres);
  const fruits = props.fruits;

  const listItems = nombres.map((nombre, index) =>
    <ListItem value={nombre} key={index}></ListItem>
  );

  const listItemsFruits = fruits.map((fruit, index) =>
    <ListItem value={fruit} key={index}></ListItem>
  );

  return (<div>
    <ul>
      {listItems}
    </ul>
    <ul>
      {listItemsFruits}
    </ul>
  </div>);
}

const numbers = [1, 2, 3, 4, 5];
const fruits = ["Banana", "Apple", "Orange"];
ReactDOM.render(
  <NumberList nombres={numbers} fruits={fruits}></NumberList>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();