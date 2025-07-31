import { Link, NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav">
          <NavLink style={(navObject)=>{
            return navObject.isActive ? {color : "blue"} : {color : "orange"}
          }} to="/"><h4>HOME</h4></NavLink>
            <NavLink style={(navObject)=>{
            return navObject.isActive ? {color : "blue"} : {color : "orange"}
          }} to="/about"><h4>ABOUT</h4></NavLink>
          <NavLink style={(navObject)=>{
            return navObject.isActive ? {color : "blue"} : {color : "orange"}
          }} to="/items"><h4>ITEMS</h4></NavLink>
          <Outlet />
      </div>
    </>
  );
}

export default Navbar;
