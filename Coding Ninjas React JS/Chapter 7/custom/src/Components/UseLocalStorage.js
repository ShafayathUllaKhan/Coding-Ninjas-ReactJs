import { useEffect, useState } from "react";


export function  UseLocalStorage(){
    const [email, setEmail] = useState("");
    
       useEffect(()=>{
          const email = localStorage.getItem("email");
          if(email){
            setEmail(email)
          }
        },[])
    
      useEffect(()=>{
        localStorage.setItem("email" , email);
      },[email]);

      return {email,setEmail}
}