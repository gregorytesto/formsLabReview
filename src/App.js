import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form />
        <section id="result">
          <p></p>
        </section>
      </main>
    );
  }
}

export default App;
