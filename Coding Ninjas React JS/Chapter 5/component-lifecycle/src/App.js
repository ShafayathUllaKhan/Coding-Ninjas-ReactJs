import React from "react";
import TimerOne  from "./Components/Timer/TimerOne";
import { Error } from "./Error";
import { Counter } from "./counter";

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      timerOn : false
    };
  }

  handleButton(){
    let timerOn = this.state.timerOn;
    this.setState({
      timerOn : !timerOn
    })
  }
  render(){
    return  (
    <>
    <h1>hi</h1>
    {/* {this.state.timerOn ? <TimerOne />:null}
    <button onClick={this.handleButton.bind(this)}>{this.state.timerOn ? "Stop" : "Start"}</button> */}

      <Error>
          <TimerOne timerOn = {this.state.timerOn}/>
    <button onClick={this.handleButton.bind(this)}>{this.state.timerOn ? "Stop" : "Start"}</button>
      <Counter />
      </Error>
      
    
    </>
  );
}}

export default App;
