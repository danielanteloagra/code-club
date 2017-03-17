import React, { Component } from 'react';
import CodeBreaker from './CodeBreaker';
import './style.css';

const secret = '6378';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.codeBreaker = new CodeBreaker();
    this.codeBreaker.setSecret(secret);
    this.state = {
      result: '',
    }
  }

  onChange(event) {
    this.setState({
      ...this.state,
      result: this.codeBreaker.takeGuess(event.target.value),
    })
  }

  render() {
    return (
      <div className="codebreaker">
        <div className="codebreaker__guess">
          <label>Your Guess: </label>
          <input onChange={this.onChange}/>
        </div>
        <span className="codebreaker__result">
          { this.state.result }
        </span>
      </div>
    );
  }
}

export default App;
