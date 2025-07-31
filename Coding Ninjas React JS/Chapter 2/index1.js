function sum(){
    let a = 10+5;
    return a
}

const header = <h1>JSX Expression</h1>;// JSX Expression

function Data(){
    var name = 'Shafayath';
    var name1;
    var null1 = null;
    var boo = true;

    return (
    <><h1>Hi {name} undefined : {name1} null value: {null1} boolean : {boo}</h1>
    {/* // Hi Shafayath undefined : null value: boolean : */}
    <p>calling a function : {sum()}</p>
    {header}
    </> )
}
    
ReactDOM.createRoot(document.getElementById('root')).render(<Data />)
