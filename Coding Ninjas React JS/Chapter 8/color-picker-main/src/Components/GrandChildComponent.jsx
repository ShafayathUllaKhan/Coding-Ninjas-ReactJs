import { useContext } from "react";
import { context } from "./context";



const GrandChildComponent = () =>{ 
  // const color = useContext(context);
  return(
    <context.Consumer>
      {(color)=>{
        return (<p style={{ color: color.color }}>Color: {color.color}</p>);
      }}
    </context.Consumer>
  ) 
};

export default GrandChildComponent;
