// Ternary Operator
// function App(){

//     const loggedIn = true;

//     return (
//         <h1>Hi {loggedIn ? 'Shafayath' : "User"}</h1>
//     )

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);


// And Operator
// function App(){

//     const loggedIn = false;


//     return (
//         <>
//         <h1>Hi {loggedIn ? 'Shafayath' : "User"}</h1>
//         {loggedIn && <p>Welcome to the Portal</p>}
//         </>
//     )

// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />)



// OR Operator
function App(){

    let name = "Alexa";
    let lastName = "Diaz";


    return (
        <>
        <h1>Hi {name || lastName}</h1>
        
        </>
    )

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)