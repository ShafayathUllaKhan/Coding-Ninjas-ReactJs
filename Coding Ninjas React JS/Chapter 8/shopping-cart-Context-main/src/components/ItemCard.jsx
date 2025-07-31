import React from "react";
import styles from "../styles/ItemCard.module.css";
import { useValue } from "../itemContext";
import data from "../data/itemData";
function ItemCard({ name, price }) {
  const value = useValue();
  // const handleAdd = () => {

  //   value.setTotal(value.total + price)
  //   value.setItem(value.item + 1)
  // };

  // const handleRemove = () => {

  //   if(value.total > 0){
  //      value.setTotal((prevState)=>{
  //           return prevState - price
  //      });

  //      value.setItem(value.item - 1)
  //   }
   
  // };

  return (
    <>
    {
        data.map((ele,index)=>{
          return (
            <>
           <div className={styles.itemCard}>
          <div className={styles.itemName}>{ele.name}</div>
      <div className={styles.itemPrice}>&#x20B9; {ele.price}</div>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={() => value.handleAdd(ele)}>
          Add
        </button>
        <button className={styles.itemButton} onClick={() => value.handleRemove(ele)}>
          Remove
        </button>
      </div>
      </div>
      
      </>
          )

        })
      }
   </>
     
  );
}

export default ItemCard;
