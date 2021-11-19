import React  from 'react';
import { Component } from 'react';
import './App.css';

const API_KEY = "e5ed686b";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: "", description: {}};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    /*const API_KEY = "e5ed686b";
    const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${this.state.value}`;*/
  }

  

  updateInputValue(e) {
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(e) {
    this.getMovie();
  }

  /*componentDidMount() {
    this.getMovies();
  }*/

  getMovie = _ => {
    var url = `http://www.omdbapi.com/?t=${this.state.inputValue}&apikey=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(response => this.setState({description: response}))
    .catch(err => console.error(err))
  }


  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <div>Movie Descriptions</div>
          <div>
              <input type="text" value={this.state.inputValue} onChange={this.updateInputValue}></input>
              <button onClick={this.handleSubmit}>submit</button>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
