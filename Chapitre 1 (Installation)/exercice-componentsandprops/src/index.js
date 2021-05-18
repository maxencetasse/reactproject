import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function formatDate(date){
  return date.toLocaleDateString();
}

function ImageAvatar(props){
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
      width="100px"
    />
  );
}

function UserInfo(props){
  return(
    <div className="UserInfo">
      <ImageAvatar user={props.author}/>
      <div className="UserInfo-name">
        {props.name}
      </div>
    </div> 
  );
}

function Commentary(props){
  return(
    <div className="Comment-text">
      {props.text}
    </div>
  )
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author={props.author}></UserInfo>
      <Commentary text={props.text}></Commentary>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const info = {
  date: new Date(),
  text: 'Bonjour et bienvenue sur le site',
  author: {
    name: 'Maxence Tasse',
    avatarUrl: 'https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-ic%C3%B4ne-de-profil-avatar-portrait-masculin-personne-d%C3%A9contract%C3%A9e.jpg',
  }
}

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

ReactDOM.render(
  <Comment date={info.date} text={info.text} author={info.author}></Comment>,
  document.getElementById('info')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
