import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { context } from "./context";
const ParentComponent = (props) => {
  const [color, setColor] = useState("#000000");

  return (
    <>
      <h1>Pick a color</h1>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
        value={color}
      />
      <context.Provider value={{color,setColor}} >
      <ChildComponent />
      </context.Provider>
    </>
  );
};

export default ParentComponent;
