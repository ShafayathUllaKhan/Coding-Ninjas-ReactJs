const obj = [
    {
        name:"Student 1",
        age:10,
        marks: 95
    },
    { name:"Student 2",
        age:10,
        marks: 95},
        { name:"Student 3",
        age:10,
        marks: 95},
        { name:"Student 4",
        age:10,
        marks: 95}
]

const table = <>
    <table border={1}>
        <thead>
        <tr>
        <th>Student Name</th>
        <th>Age </th>
        <th>Marks</th>
        </tr>
        </thead>
         <tbody>
        {obj.map((ele,index)=>{
            return (       
                    <tr key={index}>
                    <td>{ele.name}</td>   
                    <td>{ele.age}</td>   
                    <td>{ele.marks}</td>   
                    </tr>    
                    
            
            )
        })}</tbody>    

    </table>
</>

ReactDOM.createRoot(document.getElementById('root')).render(table);