import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class TimeClock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount(){
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <div>
        <h1>Bonjour Maxence,</h1>
        <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function Application(){
  return(
    <div>
      <TimeClock></TimeClock>
      <TimeClock></TimeClock>
      <TimeClock></TimeClock>
    </div>
  )
}

function clock(){
  ReactDOM.render(
    <TimeClock />,
    document.getElementById('timeClock')
  );
}

ReactDOM.render(
  <Application></Application>,
  document.getElementById('root')
)

//setInterval(clock, 1000);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
