import { createContext, useContext, useState } from "react";
import CartModal from "./components/CartModel";

const ItemContext = createContext();

export function useValue(){
   const value = useContext(ItemContext);
   return value;
}


function CustomItemContext({children}){
        const [total, setTotal] = useState(0);
  const [item, setItem] = useState(0);
  const [showCart,setCart] = useState(false);
  const [cartData,setcartData] = useState([]);


  
const handleAdd = (ele) => {

   
    const index = cartData.findIndex((item)=>{ return item.id === ele.id});
    if(index === -1){
      setcartData([...cartData,{...ele,qty : 1}]);
      setTotal(total + ele.price)
  
      console.log(cartData);
    }else{
      cartData[index].qty++;
      setcartData(cartData);
        setTotal(total + ele.price)
        console.log(cartData);

    }
        setItem(item + 1)
    

  };

  const handleRemove = (ele) => {

    const index = cartData.findIndex((item)=>{
      return item.id === ele.id
    })

    if(index !== -1){
      cartData[index].qty--;
      setItem(item -1);
      setTotal(total - ele.price);
      if(cartData[index].qty === 0){
        cartData.splice(index,1);
      }
      setcartData(cartData)
    }
   
  };

   function clear(){
    setTotal(0);
    setItem(0);
    setcartData([])
  }

  function toggle(){
    setCart(!showCart);
  }



console.log(showCart);
    return(
        <ItemContext.Provider value={{total,setTotal,item,setItem,handleAdd,handleRemove,clear,toggle,cartData}}>
          {showCart && <CartModal />}
            {children}
        </ItemContext.Provider>
    )
}

export {ItemContext,CustomItemContext};