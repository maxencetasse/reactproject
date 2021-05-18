import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatName(user){
  return user.firstName + ' ' + user.lastName;
}

function getGreetings(user){
  if(user.firstName !== 'Maxence' || user.lastName !== 'Tasse'){
    return <h1>Je ne connais pas cette personne.</h1>;
  }else{
    return <h1>Bonjour et bienvenue, {user.firstName + ' ' + user.lastName}</h1>;
  }
}

function getTimeClock(){
  const myClock = (
    <div>
      <h2>Il est : {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(myClock, document.getElementById('timeClock'));
}

const user = {
  firstName: 'Maxence',
  lastName: 'Tasse'
};

const name = 'Maxence Tasse';
const element = <h1>Bonjour, {name}</h1>;
const element2 = <h1>{2 + 2}</h1>;
const element3 = <h1>{formatName(user)}</h1>;
const element4 = getGreetings(user);
const element5 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hi !'
)

ReactDOM.render(
  /*<React.StrictMode>
    <App />
  </React.StrictMode>,*/
  //<h1>Bonjour, monde !</h1>,
  //element,
  //element2,
  //element3,
  //element4,
  element5,
  document.getElementById('root')
);

ReactDOM.render(
  element4,
  document.getElementById('presentation')
);

setInterval(getTimeClock, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
