import React from "react";
import Form from "./Form";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      displayResult: 0
    }
  }
  handleChangeResult=(result)=>{
    this.setState({
      displayResult: result
    })
  }
  render() {
    return (
      <main>
        <p>Enter each number in the array, separated by a ','</p>
        <Form handleChangeResult={this.handleChangeResult} />
        <section id="result">
          <p>{ this.state.displayResult }</p>
        </section>
      </main>
    );
  }
}

export default App;
