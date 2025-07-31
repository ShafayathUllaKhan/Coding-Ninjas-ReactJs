import {   useEffect, useReducer, useRef, useState } from "react";
import { db } from "../firebaseInit";
import { addDoc, collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";

function blogsReducer(state,action){

    switch(action.type){
         case "ADD": // Load blogs from Firestore

      return action.blogs;
        case "REMOVE":
            return state.filter((ele,index)=>{
                return action.index !== ele.id;
            })
        
        case "One Data":
            return [action.blog,...state]
        default :
            return [];
    }

}


//Blogging App using Hooks
export default function Blog(){
    
    const [formData,setFormData] = useState({title:"",content:""});
    // let [blogs,setBlogs] = useState([]);
    const [blogs,dispatch] = useReducer(blogsReducer,[]);


    let titleRef = useRef(null);
 

    useEffect(()=>{
        titleRef.current.focus();
    },[]);

    useEffect(()=>{
        if(blogs.length && blogs[0].title){

            document.title = blogs[0].title;
        }else{
   
            document.title = "No Blogs"
        }
    },[blogs])

     useEffect(() => {
    //  function fetchBlogs() {
    //   const snapshot = await getDocs(collection(db, "blogs"));
    // const blogList = snapshot.docs.map(doc => doc.data());
     const snapshot =  onSnapshot(collection(db, "blogs"),(snapshot)=>{
        const blogList = snapshot.docs.map(doc => ({id: doc.id,...doc.data()}));
        dispatch({ type: "ADD", blogs: blogList });
     });
      
      
    // }

    // fetchBlogs();

     return () =>{ snapshot()};
  }, []);

    async function handleSubmit(e){
        e.preventDefault();

        //setBlogs([{title :formData.title,content:formData.content},...blogs]);
        const data = {
            title: formData.title,
            content : formData.content,
            createdOn : new Date()
        };

        dispatch({type : "One Data",blog: {title :formData.title,content:formData.content}})

        setFormData({title:"",content :""});
        titleRef.current.focus();

        
        await addDoc(collection(db,'blogs'),data)
       
    }

    function handleTitle(e){
        setFormData({title:e.target.value,content : formData.content});

        
       
    }

     function handleContent(e){
        
         setFormData({title:formData.title,content:e.target.value});
    }

    async function handleDelete(indexParam){
    //    setBlogs(blogs.filter((ele,index)=>{
    //     return indexParam !== index
    //    }))

console.log(indexParam);

    const docRef =  doc(db,"blogs",indexParam);

    await deleteDoc(docRef);

    dispatch({type: "REMOVE",index : indexParam})

    }

    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                        ref={titleRef}
                                placeholder="Enter the Title of the Blog here.." value={formData.title} onChange={handleTitle}/>
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.." value={formData.content} onChange={handleContent}/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((ele,index)=>{
            return (
                <div className="blog" key={index}>
                    <h3>{ele.title}</h3>
                    <p>{ele.content}</p>
                    <button className="btn remove" onClick={()=>{handleDelete(ele.id)}}>Delete</button>
                </div>
            )
        })}
       
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
