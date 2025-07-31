import { Link, Outlet, useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";



function Items() {
    const param = useParams();
  return (
    <>
    
      <main>
        <h1>Items Page</h1>
      </main>
      <ul>
        {
          ITEMS.map((ele,index)=>{
              return (
                <>
                    <li key={ele.id}>
                        <Link to={`/items/${ele.id}`} >
                          {ele.id}
                        </Link>
                      </li>
                </>
              )
          })
        }
      </ul>
     
    </>
  );
}

export default Items;
