import React, { Component } from "react";
import "./App.css";
import "./Components/faqItems";
import FaqItems from "./Components/faqItems";
import DisplayAnswer from "./Components/displayAnswer";

export default class App extends Component {
  state = {
    question: "",
    answer: "",
    steps: [],
  };

  handleItemClick = (clickedItem) => {
    const { question, answer, steps } = clickedItem;
    this.setState({ question, answer, steps });
  };

  render() {
    return (
      <div className="App">
        <FaqItems handleItemClick={this.handleItemClick} />
        <DisplayAnswer {...this.state} />
      </div>
    );
  }
}
