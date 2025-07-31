import React from "react";

export class Counter extends React.Component{
        constructor(){
            super();
            this.state ={
                counter : 0
            }
        }

        handleIncrement(){
            this.setState((prevState)=>{
                return {counter : prevState.counter + 1}
            })
        }

        render(){
            return(
                <>
                <p>Conter {this.state.counter}</p>
                <button onClick={this.handleIncrement.bind(this)}>Increment</button>
                </>
            )
        }

        componentDidMount(){
            console.log("componentDidMount");
        }

        componentDidUpdate(prevProps,prevState,snapshot){
            console.log("componentDidUpdate",prevProps,prevState,snapshot);
        }
}