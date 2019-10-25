import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person.js';


class App extends Component {
  state = {
    persons: [
      {name: 'hello', age: 28},
      {name: 'Liam', age:16}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('clicked');

    // WILL NOT WORK USE SETSTATE this.state.person[0].name = 'Jo';
    this.setState({
      persons: [
        {name: newName, age: 34},
        {name: 'Manu', age:56}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, 'Belinda Bos')}>Switch Name</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Jolanda Keizer')} > My hobbies: Programming </Person>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}/>
      </div>
    );
  }
}
export default App;




