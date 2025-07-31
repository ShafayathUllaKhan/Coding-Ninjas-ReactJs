import React from "react";
export class ComponentB extends React.Component{

    constructor(){
        super();
        this.state={
            name : "ComponentB"
        }
        console.log("ComponentB Constructor");
        // this.setState({
        //     name : "CA"
        // })// ComponentB.js:10 Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the ComponentB component.
         this.state={
            name : "CA"
        } // you can update state like this but not with setSate


    }

    static getDerivedStateFromProps(props,state){
        console.log("ComponentB getDerivedStateByProps");
        // this.setState({
        //     name : "ComponentB getDerivedStateByProps"
        // })// cannot use this beacuse this is static method and if you take this you will get setState undefined
        return 10;
    }

    componentDidMount(){
        console.log("ComponentB componentDidMount");
    }
    
    render(){
        console.log("ComponentB render");
        //   this.setState({
        //     name : 'render'
        //   }) // this will take you to infinite loop
        return <h2>{this.state.name}</h2>
    }

    

}