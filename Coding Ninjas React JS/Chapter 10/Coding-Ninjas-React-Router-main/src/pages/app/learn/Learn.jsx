import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, NavLink, Outlet, useNavigate, useParams } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom

function Learn() {
  const paramdata = useParams();
  

   const nav = useNavigate();
  const course = coursesData.find((ele)=>{
    return ele.id === paramdata.courseId;
  });

console.log(course);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        
        <h2 className={style.back}>
          <Link to="/courses">{"<<"}</Link>
        </h2>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{/*Task4: List of Chapters must be rendered here  */}
            {
              course.chapters.map((ele)=>{
                console.log(ele);
                return (
                  <NavLink to={`${ele.chapter}`} style={({isActive})=>{
                        return ({color : isActive ? "white" : "black"})
                  }}>
                  <li>{ele.chapter}{" "}{ele.title}</li></NavLink>
                )
              })
            }
          </ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
        <Outlet context={course.chapters}/>
      </div>
    </div>
</div>
  );
}

export default Learn;
