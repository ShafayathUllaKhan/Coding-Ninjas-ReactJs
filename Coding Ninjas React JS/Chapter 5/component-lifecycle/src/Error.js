import React from "react";

export class Error extends React.Component{

    constructor(){
        super();
        this.state={
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }

    }

   

    render(){
        
        if(this.state.hasError){
            console.log('hi');
            return (
            <h1>Error By the client</h1>
        )
        }
        return this.props.children;
        
    }

     componentDidCatch(error,info){
        console.log("in componentDidCatch");
        console.log("Error :",error);
        console.log("Error Info :",info);
    }
}