import React, { Component } from 'react';
import './App.css';

function addHackerButton(props) {
  return (
    <button onClick={props.justClick}>+1</button>
  );
}

class Hackers extends Component {
  render() {
    return(
      <div>
        <h2>Number of hackers:</h2>
        <p>{this.props.hackers}</p>
        {addHackerButton(this.props)}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hackers: 999,
    }
  }

  buttonClick = (event) => {
    this.setState({
      hackers: this.state.hackers + 1,
    })
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Welcome to BostonHacks 2018!</p>
        <Hackers
          hackers = {this.state.hackers}
          justClick = {this.buttonClick}
        />
      </div>
    )
  }
}

export default App;
