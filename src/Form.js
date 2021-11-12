import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      input: "",
      operation: ""
    }
  }

  handleInputChange=(event)=>{
    this.setState({
      input: event.target.value
    })
  }

  handleOperationChange=(event)=>{
    this.setState({
      operation: event.target.value
    })
  }

  calcSum=(arr)=>{
    let sum = 0;
    for(let num of arr){
      sum += num;
    }
    return sum;
  }

  handleSubmit=(event)=>{
    event.preventDefault();
    let strArr = this.state.input.split(",");
    let numArr = strArr.map((str)=>Number(str));

    switch (this.state.operation) {
      case "sum":
        let sumResult = this.calcSum(numArr);
        console.log("Calculate Sum", sumResult);
        break;
      case "average":
        let avgResult = this.calcSum(numArr)/numArr.length;
        console.log("Calculate Average", avgResult);
        break;
      case "mode":
        console.log("Calculate Mode");
        break;
      default:
        break;
    }
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          id="values" 
          name="values" 
          type="text"
          value={this.state.input}
          onInput={this.handleInputChange}
        />
        <select 
          id="operation" 
          name="operation"
          value={this.state.operation}
          onChange={this.handleOperationChange}
        >
          <option value=""></option>
          <option value="sum">sum</option>
          <option value="average">average</option>
          <option value="mode">mode</option>
        </select>
        <button type="submit">Calculate</button>
      </form>
    );
  }
}

export default Form;
