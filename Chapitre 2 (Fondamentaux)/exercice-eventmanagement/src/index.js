import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Toggle extends React.Component{
  constructor(props){
    super(props);
    this.state = {isToggleOn: true};

    this.handleClick = this.handleClick.bind(this);
    console.log(this);
    console.log(this.handleClick);
  }

  handleClick(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    })
    );
  }

  render(){
    return(
      //Possibilité de mettre des paramètres
      //<button onClick={(e) => this.deleteRow(id, e)}>Supprimer la ligne</button>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

/*function ActionLink(){
  function handleClick(e){
    e.preventDefault();
    console.log('Le lien à été cliqué.');
  }

  return(
    <a href="#" onClick={handleClick}>Cliquez ICI</a>
  );
}*/

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
