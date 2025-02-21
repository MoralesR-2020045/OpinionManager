import {Schema, model} from "mongoose";

const publicationSchema = Schema({
    publicationtitle:{
        type: String, 
        required: [true, "Title is required"],
        minLength: [3, "title needs more than 3 characters"],
        maxLength: [50, "title cannot exced 50 characters"]
    },
    content:{
        type: String, 
        required: [true, "Content is required"],
        minLength: [3, "Content needs more than 3 characters"],
        maxLength: [800, "Content cannot exced 30 characters"]
    },
    userpublication:[{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    publicationdate:{
        type: Date, 
        default: Date.now
    },
    category:[{
        type: Schema.Types.ObjectId,
        ref:'Category'
    }],
    status:{
        type: Boolean,
        default: true
    }
})

export default model ("Publication", publicationSchema)