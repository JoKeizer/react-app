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

  switchNameHandler = (newName, newAge) => {
    console.log('clicked');

    // WILL NOT WORK USE SETSTATE this.state.person[0].name = 'Jo';
    this.setState({
      persons: [
        {name: newName, age: newAge},
        {name: 'Manu', age:56},
        {name: "Sandra", age: 37},

      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState ({
      persons: [
        {name: "Liam", age: 7},
        {name: event.target.value, age:56},
        {name: "Steph", age: 37},

      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={() => this.switchNameHandler("Belinda Bos", 66)}>Switch Name</button>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}/>

        <Person
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age} 
        click={this.switchNameHandler.bind(this, 'Jolanda Keizer', 34)}
        changed={this.nameChangedHandler}> My hobbies: Programming </Person>

        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}/>


      </div>
    );
  }
}
export default App;




