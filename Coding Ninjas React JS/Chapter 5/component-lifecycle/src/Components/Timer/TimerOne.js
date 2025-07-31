import React from "react";
export default class TimerOne extends React.Component{

    constructor(){
        super();
        this.stat ={
            time : 0
        }
        this.timer = null;
    }

    static getDerivedStateFromProps(props,statearg){
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
    return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
  }

    render(){
      
        return (
            <>
          <h2>Time Spent : {new Date(this.state.time*1000).toISOString().slice(11,19)}</h2>
          
          </>
        )
    }
    

    componentDidMount(){
        console.log('componentDidMount'); 
        }
    getSnapshotBeforeUpdate(prevProps,prevState){ 
        return null;
        }


    componentDidUpdate(prevProps, prevState,snapshot){
        
    if(prevProps.timerOn !== this.props.timerOn){
  
      if(this.props.timerOn){
                   this.timer = setInterval(()=>{
            this.setState((prevState)=>{
              return {time : prevState.time + 1}
            })
        },1000)
        }
          else{
           clearInterval(this.timer);
        }}}

      componentWillUnmount(){
      
        clearInterval(this.timer)
      }  
}