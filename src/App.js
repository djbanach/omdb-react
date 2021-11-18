import { Component } from 'react';
import './App.css';

import { Movie } from "./Components/Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  updateInputValue(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.value);
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="title">Movie Descriptions</div>
          <div class="form-container">
            <input type="text" value={this.state.value} onChange={e => this.updateInputValue(e)}></input>
            <button onSubmit={this.handleSubmit}>submit</button>
          </div>
        </header>
      </div>
    )
  }
}

export default App;
