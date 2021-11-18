import { Component } from 'react';
import './App.css';

import { Movie } from "./Components/Movie";

const API_KEY = "e5ed686b";
const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 class="title">Movie Descriptions</h1>
            <Movie />
        </header>
      </div>
    )
  }
}

export default App;
