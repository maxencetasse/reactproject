import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//Effets sans nettoyage


function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {document.title = `Vous avez cliqué ${count} fois`});

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


//Effets avec nettoyage


function FriendStatusWithCounter(props) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Vous avez cliqué ${count} fois`;
  },
  [count]
  );

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
  // ...
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
