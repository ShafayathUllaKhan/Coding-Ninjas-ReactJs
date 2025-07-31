import React from "react";


class App extends React.Component {

  constructor(){
    super();
    this.state={
      name: "",
      lastName : ""
    }
   
  }


  handleChange(e){
    this.setState({
      name : e.target.value
    })
  }

  handleChangeLastName(e){
   
    this.setState({
      lastName : e.target.value
    })
  }

  componentDidUpdate(){
    document.title = this.state.name + this.state.lastName;

}

  render(){
    
    return (
      <>
    <h1>Form</h1>
      <form>
       <Row label="Name">
        <input type="text" onChange={this.handleChange.bind(this)}/>
       </Row>

        <Row label="Last Name">
        <input type="text"  onChange={this.handleChangeLastName.bind(this)}/>
       </Row>

        <h1>Hello,{this.state.name}{this.state.lastName} </h1>
      </form>
    </>
  );
  } 
}




function Row(props){
  const {label} = props;
  return (
    <>
      <label>{label+":"}</label>
      {props.children}
      <br />
    </>
  )
}

export default App;
