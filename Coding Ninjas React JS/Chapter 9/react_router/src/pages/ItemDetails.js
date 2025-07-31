import { useParams } from "react-router-dom"
import { ITEMS } from "../data/itemData";
import Items from "./Items";
export function ItemDetails(){

    const param = useParams();
    
    const data = ITEMS.find((ele,index)=>{
        return ele.id === param.id})
    return(
        <>
            <main>
                <h1>{data.title}</h1>
                <h1>{data.detail}</h1>
               
            </main>
        </>
    )
}