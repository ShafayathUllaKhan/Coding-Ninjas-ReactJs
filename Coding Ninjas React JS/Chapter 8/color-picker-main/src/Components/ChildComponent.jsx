import GrandChildComponent from "./GrandChildComponent";

const ChildComponent = (props) => (
  <div
    style={{
     border: "5px solid black",    // now clearly visible
    backgroundColor: "#f0f0f0",    // light gray
    margin: "15px",
    padding: "10px"
    }}
  >
    <GrandChildComponent  />
  </div>
);

export default ChildComponent;
