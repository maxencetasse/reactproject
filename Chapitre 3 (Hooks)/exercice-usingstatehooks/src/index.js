import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Example() {
  const [count, setCount] = useState(0);

  return (<div>
      <p>Bouton cliqué {count} fois.</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
  </div>)
  ;
}

ReactDOM.render(
  <Example></Example>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
