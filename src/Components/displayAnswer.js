import React, { Component } from "react";

export default class DisplayAnswer extends Component {
  render() {
    const { question, answer, steps } = this.props;

    if (steps) {
      return (
        <div>
          <h1>{question}</h1>
          <p>{answer}</p>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      );
    }

    /*     Again I didn't know how to save return value of IF statement to a 
    variable and then conditionally render it based on STEPS bool. Problem was I didn't want to show empty OL tag without any items. 
     */

    return (
      <div>
        <h1>{question}</h1>
        <p>{answer}</p>
      </div>
    );
  }
}
