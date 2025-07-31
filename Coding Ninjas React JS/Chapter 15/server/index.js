
import { ObjectId } from "bson";
import { dataModel } from "./moongose.js";
import express from "express";
import cors from "cors";
const server = express();

server.use(express.json());
server.use(cors())
server.get('/',async (req,res)=>{
    const data = await dataModel.find();
    res.send(data);
})

server.post('/',async (req,res)=>{

    const {text,completed} = req.body;
    await dataModel.insertOne({
            text : text,
            completed: completed
    });
    res.send({text,completed});

})

server.put('/:id',async (req,res)=>{
    const id = req.params;
    const {completed} = req.body;
     await dataModel.updateOne({
        _id : new ObjectId(id)
    },{
        $set:{
            completed : completed
        }
    });

    const data = await dataModel.find({
        _id:new ObjectId(id)
    })
    
    res.send(data);
})

server.delete('/delete/:id',async (req,res)=>{
    const id = req.params.id;
     await dataModel.deleteOne({
        _id : new ObjectId(id)
    })
    res.send(id);
})


server.listen(4200,()=>{
    console.log("Server is listining to 4200");
})