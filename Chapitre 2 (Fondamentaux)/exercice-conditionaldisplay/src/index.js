import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { resetWarningCache } from 'prop-types';

function UserGreeting(props){
  return <h1>Bienvenue  !</h1>;
}

function GuestGreeting(props){
  return <h1>Veuillez vous Connecter</h1>;
}

function BoutonConnexion(props){
  return <button onClick={props.onClick}>Connexion</button>;
}

function BoutonDeconnexion(props){
  return <button onClick={props.onClick}>Deconnexion</button>;
}

function Connected(props){
  const isConnected = props.isConnected;
  if(isConnected){
    return (
      <div>
        <UserGreeting></UserGreeting>
      </div>
      );
  }else{
    return (
      <div>
        <GuestGreeting></GuestGreeting>
      </div>      
    );
  }
}

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isConnected: false};
  }

  handleLoginClick(){
    this.setState({isConnected: true});
  }

  handleLogoutClick(){
    this.setState({isConnected: false});
  }

  render(){
    const isConnected = this.state.isConnected;
    var button;

    if(isConnected){
      button = <BoutonDeconnexion onClick={this.handleLogoutClick}></BoutonDeconnexion>;
    }else{
      button = <BoutonConnexion onClick={this.handleLoginClick}></BoutonConnexion>;
    }

    return (
      <div>
        <Connected isConnected={isConnected}></Connected>
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <LoginControl></LoginControl>,
  document.getElementById('connexion')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
