import React  from 'react';
import { Component } from 'react';
import './App.css';

/*import { Movie } from "./Components/Movie"; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(e) {
    this.setState({value: e.target.value});
  }

  handleSubmit(e) {
    alert(this.state.value);
    e.preventDefault();
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Movie Descriptions</div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.value} onChange={this.updateInputValue}></input>
              <button>submit</button>
            </form>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
