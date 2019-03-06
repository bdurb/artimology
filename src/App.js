import React, { Component } from 'react';
import './App.css';


import Results from './components/Results'

class App extends Component {
  constructor() {
    super()
    this.state = {
      searchTerm: ''
    }
  }

  updateSearchTerm = e => this.setState({ searchTerm: e.target.value})

  render() {
    return (
      <div className="App">
        <h1>Search The Art</h1>
          <h2>What do you want to search for?</h2>
          <input onChange={this.updateSearchTerm}></input>
        <Results searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
