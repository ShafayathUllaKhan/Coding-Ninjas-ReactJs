import { useEffect, useState } from "react";


export function Hooks(){

    const [name,setName] = useState("");
    const [lastName,setlastName] = useState("");

    useEffect(()=>{
      document.title = name + " " + lastName;
    },[lastName]);

    useEffect(()=>{
      let timer = setInterval(()=>{
        console.log('hi');
      },2000);
      return ()=>{
        clearInterval(timer)
      }// The cleanup function you return from useEffect runs on unmount.
    },[])


     return (
      <>
      <h1>--------------------------</h1>
    <h1>Form With Hooks</h1>
      <form>
       <Row label="Name">
        <input type="text" value={name} onChange={(e)=>{
            setName(e.target.value);
        }}/>
       </Row>

        <Row label="Last Name">
        <input type="text" value={lastName} onChange={(e)=>{
            setlastName(e.target.value);
        }}/>
       </Row>

        <h1>Hello,{name}{" "}{lastName}</h1>
      </form>
    </>
  );
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