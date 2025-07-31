
import mongoose from "mongoose";
import { type } from "node:os";


mongoose.connect('mongodb://localhost:27017/todo-app',{
    useNewUrlParser: true,
  useUnifiedTopology: true,
});


const Schema = new mongoose.Schema({
    text: String,
    completed : Boolean
});

const dataModel = new mongoose.model('ReactToolkit',Schema);

export {dataModel};