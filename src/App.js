import React from "react";
import "./App.css";
import cheesyInfo from "./cheesyInfo";
import Burger from "./Burger";

class App extends React.Component {
  // convert string array to div array component, use the map to return new array
  // const ingredients = ["tomato", "lettuce", "kiwi", "bun"];
  state = {
    // ingredients: ["tomato", "lettuce", "kiwi", "bun"]
    ingredients: []
  };
  // handleTomato = () => {
  //   // mutate, react say no
  //   // this.state.ingredients.push('tomato')
  //   // // copy exsiting
  //   //     const newIngredients = this.state.ingredients.slice(0);
  //   //     newIngredients.push("tomato");
  //   // same copy exsiting, array spread
  //   // const newIngredients = [...this.state.ingredients, "tomato"];
  //   // immutable updates
  //   this.setState({
  //     // ingredients: ["tomato"]
  //     ingredients: [...this.state.ingredients, "tomato"]
  //   });
  // };
  // handleLettuce = () => {
  //   this.setState({
  //     ingredients: [...this.state.ingredients, "lettuce"]
  //   });
  // };

  add = text => {
    this.setState({
      ingredients: [...this.state.ingredients, text]
    });
  };

  remove = targetIndex => {
    // console.log(index);
    // this.state.ingredients to copy the original one , not change directly, use setState to change
    this.setState({
      // filter method to filter in, anything you click in and filter in others , that's why !==
      ingredients: this.state.ingredients.filter(
        (ingredients, index) => index !== targetIndex
      )
    });
  };

  render() {
    const { ingredients } = this.state;
    return (
      <div className="App">
        <aside>
          <p>
            <button onClick={() => this.add("tomato")}>add tomato</button>
          </p>
          <p>
            <button onClick={() => this.add("lettuce")}>add lettuce</button>
          </p>
          <p>
            <button onClick={() => this.add("kiwi")}>add kiwi</button>
          </p>
          <p>
            <button onClick={() => this.add("cheese")}>add cheese</button>
          </p>
        </aside>
        <Burger ingredients={ingredients} onRemove={this.remove} />
        <p>{cheesyInfo(ingredients)}</p>
      </div>
    );
  }
}

export default App;
