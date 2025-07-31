
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import { ItemDetails } from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage";


const routes = createBrowserRouter([
  {path: "/", element: <Navbar />,
    errorElement:<ErrorPage />,
    children :[
    {index: true, element: <Home />},
  {path: "/about", element: <About />},
  {path: "/items", children:[
    { index : true,element: <Items />},
     {
    path: ":id",element: <ItemDetails />
  }
  ]},
 
  ]},
  
]);

// const routes = createRoutesFromElements(
//   <>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/items" element={<Items />} />
//   </>
// )

// const router = createBrowserRouter(routes)

function App() {
  return (
    <>

    <RouterProvider router={routes}/>
   
    </>
  );
}

export default App;
