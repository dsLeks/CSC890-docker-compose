import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.startConnection = this.startConnection.bind(this);
  }

  async startConnection() {
    fetch('/connectdb')
      .then(res => res.text())
      .then(text => console.log(text));
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Meet the Team
          </p>
          <div>
            <p>Alekhya Gandu - Team Lead</p>
          </div>
          <div>
            <p>Jarret - Developer</p>
          </div>
          <div>
            <p>Nassim - Developer</p>
          </div>
          <div>
          <button class="button" onClick={this.startConnection}>Click Me to test database</button>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
