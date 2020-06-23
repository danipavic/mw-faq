import React, { Component } from "react";

const faqItems = {
  item1: {
    question: "how to rename album",
    id: "item1",
    answer: "yes you can",
    link: "https://youtu.be/XUqT9lL5vac",
  },
  item2: {
    question: "how to rename person",
    id: "item2",
    answer: "hurpdurp",
    steps: ["first", "second"],
    link: "https://youtu.be/XUqT9lL5vac",
  },
  item3: {
    question: "how to add location",
    id: "item3",
    answer: "this you need to do",
    steps: ["first", "second", "third", "fourth"],
    link: "https://youtu.be/XUqT9lL5vac",
  },
};

export default class FaqItems extends Component {
  render() {
    return (
      <div>
        <ol>
          {Object.values(faqItems).map((item) => {
            const { id, question } = item;
            const { handleItemClick } = this.props;
            return (
              <li key={id} onClick={() => handleItemClick(faqItems[id])}>
                {question}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}
