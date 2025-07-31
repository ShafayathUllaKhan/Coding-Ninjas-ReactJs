// render array and onj

const array = [10,20]; // assigning unique keys
const cars = ["bmw","audi"] // assigning unique keys

const obj = {
    name : "shafayath"
}

const data = <><h1>{array} {obj.name}</h1>
    {array.map((num,index)=>{
        return <h1 key={index}>{num}</h1>;
    })}
</>;

const list = <><ul>{cars.map((ele,index)=>{
    return <li key={index}>{ele}</li>

})}</ul></>

ReactDOM.createRoot(document.getElementById("root")).render(data);
ReactDOM.createRoot(document.getElementById("root")).render(list);