import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";

function App() {
  const routes = createBrowserRouter([
    {path:"/",element:<Nav />, children:[
      {path:"",element:<Hero />},
      // your code never do this way
      // {path:"courses",element:<Courses />},
      // {path:"details/:id",element:<Details />},
      // {path:"details/:id/learn",element:<Learn />}

      {
        path:"/courses",
        children:[
          {index:true,element:<Courses />},
          {
            path: ':courseId',
            children:[
              {index : true,element: <Details />},
              {path:"learn",element:<Learn />,children:[
                {
      path:":chapterId",element: <Chapter />
    }
              ]},
              
            ]
            
          }
        ]
      }
    ]},
  ]);


  return (
    <RouterProvider router = {routes} />
  );
}

export default App;
