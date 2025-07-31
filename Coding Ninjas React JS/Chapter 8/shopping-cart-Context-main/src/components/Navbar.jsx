import React from "react";
import styles from "../styles/Total.module.css";
import {  useValue } from "../itemContext";

function Navbar() {
  const Item = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {Item.total}</h1>
      <h1>Items: {Item.item}</h1>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={Item.clear}>Reset</button>
        <button className={styles.button} onClick={Item.toggle}>Cart</button>
       
      </div>
    </div>
  );
}

export default Navbar;
