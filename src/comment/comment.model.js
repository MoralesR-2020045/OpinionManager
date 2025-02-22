import {Schema, model} from "mongoose";

const commentSchema = Schema({
    usercomment:{
        type: Schema.Types.ObjectId, 
        ref: 'User',
        required: true,
    },
    comment:{
        type: String, 
        required: [true, "Comment is required"],
        maxLength: [500, "Name cannot exced 500 characters"]
    },
    publicationcomment:[{
        type: Schema.Types.ObjectId, 
        required: true,
        ref: 'Publication',
    }],
    commentdate:{
        type: Date, 
        default: Date.now
    },
    status:{
        type: Boolean,
        default: true
    }
})

export default model ("Comment", commentSchema)