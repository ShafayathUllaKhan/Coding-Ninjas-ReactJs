const express = require("express");
const todoRoutes=require("./todoRoutes");
const cors = require("cors")
const server = express();




server.listen(4100);
const corsOrigin={
    origin:'http://localhost:3000'
}
server.use(cors(corsOrigin));
server.use(express.json()); // Add this line to parse JSON requests
server.use("/api/todos/", todoRoutes.router);

server.get("/", (req, res)=>{
    res.send("Welcome to Utility api");
});
console.log("Server is listening at 4100");