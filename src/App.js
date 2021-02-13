import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: '',
    age: '',
    persons: [{ name: 'Jorge', age: 31 }, { name: 'Juan', age: 29 }],
  };

  onSubmit = (event) => {
    event.preventDefault();
    const persons = [...this.state.persons];
    const name = this.state.name;
    const age = this.state.age;
    persons.push({ name, age });
    this.setState({ persons });
  }

  onChangeInput = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" placeholder="Full name" required value={this.state.name} onChange={this.onChangeInput('name')}/>
          <input type="number" name="age" placeholder="Age" required value={this.state.age} onChange={this.onChangeInput('age')}/>
          <input type="submit" value="Set" />
        </form>
        <ul>
          {
            this.state.persons.map((person, i) => <li key={`${Date.now()}-${i}`}>{person.name} - {person.age}</li>)
          }
        </ul>
      </div>
    );
  }
}

export default App;
