import React  from 'react';
import { Component } from 'react';
import './App.css';

const API_KEY = "e5ed686b";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: "", description: []};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  

  updateInputValue(e) {
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(e) {
    this.getMovie();
  }


  getMovie = _ => {
    var url = `https://www.omdbapi.com/?t=${this.state.inputValue}&apikey=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(response => this.setState({description: response}))
    .catch(err => console.error(err))
  }

  checkResponse(description){
    if(this.state.description.Response==="True"){
      return(
        <div>
          {this.state.description.Title} - {this.state.description.Year} - {this.state.description.Rated}
        </div>
      );
   }
     return (
       <p>No Movie found</p>
     );
   }


  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <div>Movie API</div>
          <div>
            <input type="text" value={this.state.inputValue} onChange={this.updateInputValue}></input>
            <button onClick={this.handleSubmit}>submit</button>
          </div>
          <br/>
          <div>
            Movie Description:
          </div>
          <br/>
          <div>
            {this.checkResponse(this.state.description.Response)}
          </div>
        </header>
      </div>
    )
  }
}

export default App;
