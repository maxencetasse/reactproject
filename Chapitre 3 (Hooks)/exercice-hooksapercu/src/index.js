import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Example(props) {
  const [count, setCount] = useState(0);

  // Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    // Mettre à jour le titre du document en utilisant l'API du navigateur
    document.title = `Bouton cliqué ${count} fois`;
  });

  return (
    <div>
      <p>Bouton cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Cliquez ici
      </button>
    </div>
  );
}

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    //ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      //ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Chargement...';
  }
  return isOnline ? 'En ligne' : 'Hors-ligne';
}

/*const [age, setAge] = useState(42);
const [fruit, setFruit] = useState('banane');
const [todos, setTodos] = useState([{ text: 'Apprendre les Hooks' }]);*/

ReactDOM.render(
  <Example></Example>,
  document.getElementById('root')
);

/*ReactDOM.render(
  <ExampleFruit></ExampleFruit>,
  document.getElementById('exemplefruit')
);*/

ReactDOM.render(
  <FriendStatus></FriendStatus>,
  document.getElementById('friendstatus')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
