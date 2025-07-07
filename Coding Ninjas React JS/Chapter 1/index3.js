// // React Fragment



// const reactHeading = <React.Fragment>
//     <h1>Hi react</h1>
//     <h1>Hi Shafayath</h1>
// </React.Fragment>

// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);

// // empty Fragment it is updated version of react fragment
// const reactHeading1 = <>
//     <h1>Hi react</h1>
//     <h1>Hi Shafayath ulla</h1>
// </>

// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading1);


// // React Component

// // 1. functional Component (functions in js)
// // 2. class based components (classes in js)


// // 1. functional Component (functions in js)

function App(){
    // first letter should be in caps 
    return <>
    <h1>Hi react</h1>
    <h1>Hi Shafayath ulla Khan</h1>
</>
}

// // ReactDOM.createRoot(document.getElementById('root')).render(App());// the deffirence you will see in react developers tool
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);


// in Arrow function return will work with out writting it
const Arrow = ()=>(
       <> 
        <h1>Hi react</h1>
        <h1>Hi Arrow function</h1>
    <App />
        </>
)

// ReactDOM.createRoot(document.getElementById('root')).render(<><Arrow /> <App /></>);
console.log('hi');
ReactDOM.createRoot(document.getElementById('root')).render(<Arrow /> );
console.log('hi');