import React from 'react';
import { subscrbieToTimer } from './Timer';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timestamp: 'no timestamp yet'
    }

    subscrbieToTimer((err, timestamp) => this.setState({
      timestamp
    }));
  }
  render() {
    return (
      <div>
        <h1>Welcome Retro 4 Fun!</h1>  
        <h2>Time: {this.state.timestamp}</h2>
      </div>
    );
  }
}

export default App;
