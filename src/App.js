import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";

class App extends Component {

  state = {
    recipes: []
  }

  
  // https://www.food2fork.com/api/search?key=2930981db6150663e713632187ef62bc&q=shredded%20chicken

  getRecipe =async(e)=>{

    const API_KEY = '2930981db6150663e713632187ef62bc';
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault()
    const api_call =await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=10`);
  
    const data = await api_call.json();
    this.setState({recipes: data.recipes})
    console.log(this.state.recipes);
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-Title"> Recipe-Search</h1>
        </header>
        <Form getRecipe ={this.getRecipe} />
      </div>
    );
  }
}

export default App;
