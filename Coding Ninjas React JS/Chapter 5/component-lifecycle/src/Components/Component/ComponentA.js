import React from "react";
import { ComponentB } from "./ComponentB";
export class ComponentA extends React.Component{

    constructor(){
        super();
        this.state={
            name : "ComponentA",
            data : [],
        }
        console.log("ComponentA Constructor");
        // this.setState({
        //     name : "CA"
        // })// ComponentA.js:10 Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the ComponentA component.
        //  this.state={
        //     name : "CA"
        // } // you can update state like this but not with setSate


    }

    static getDerivedStateFromProps(props,state){
        console.log("ComponentA getDerivedStateByProps");
        // this.setState({
        //     name : "ComponentA getDerivedStateByProps"
        // })// cannot use this beacuse this is static method and if you take this you will get setState undefined
        return 10;
    }

    componentDidMount(){
        console.log("ComponentA componentDidMount");
        fetch('https://dummyjson.com/user').then((res)=>{
            return res.json();
        }).then((data)=>{
            console.log(data);
            this.setState({
                data : data.users
            })
        });
    }
    render(){
        console.log("ComponentA render");
        //   this.setState({
        //     name : 'render'
        //   }) // this will take you to infinite loop
        console.log(this.state);
        return (
            <>
        <h1>{this.state.name}</h1>
        <ComponentB />
        <ul>
            {this.state.data.map((ele,index)=>{
               return( <li key={index}>{ele.firstName}</li>);
            })}
        </ul>
        </>);
    }
}