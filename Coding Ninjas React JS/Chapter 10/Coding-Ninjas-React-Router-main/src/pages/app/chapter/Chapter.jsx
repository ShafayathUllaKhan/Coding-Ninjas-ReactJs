import React from "react";
import styles from "./Chapter.module.css";
import { Outlet, useOutletContext, useParams } from "react-router-dom";

function Chapter() {
  const data = useOutletContext();
  const paramdata = useParams();
  const chapterdata = data.find((ele)=>{
    return ele.chapter === Number(paramdata.chapterId)
  });
  console.log(chapterdata);
  return (
    <>
    <div>
      <h1>{chapterdata.title}</h1>
      <h2>{chapterdata.description}</h2>
      <p className={styles.para}>{chapterdata.chapter}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src=""
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
      </>
  );
}

export default Chapter;
