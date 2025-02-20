import {Schema, model} from "mongoose";

const categorySchema = Schema({
    name:{
        type: String,
        require: true,
        unique: true
    },
    description:{
        type:String, 
        require: true
    },
    status:{
        type: Boolean,
        default: true
    }
})

export default model ("Category", categorySchema) 