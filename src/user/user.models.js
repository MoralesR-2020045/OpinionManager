import {Schema, model} from "mongoose";

const userSchema = Schema({
    name:{
        type: String, 
        required: [true, "Name is required"],
        minLength: [3, "Name needs more than 3 characters"],
        maxLength: [30, "Name cannot exced 30 characters"]
    },
    surname:{
        type: String, 
        required: [true, "surname is required"],
        minLength: [3, "Name needs more than 3 characters"],
        maxLength: [30, "Name cannot exced 30 characters"]
    },
    username:{
        type: String, 
        unique: true,
        required: [true, "username is required"],
        minLength: [3, "Name needs more than 3 characters"],
        maxLength: [30, "Name cannot exced 30 characters"]
    },
    phone:{
        type: String, 
        minLength: 8,
        maxLength: 8,
    },
    email:{
        type: String, 
        required: [true, "Email is required"],
        maxLength: [60, "Name cannot exced 30 characters"],
        unique:true
    },
    password:{
        type: String,
        required: [true, "Password is required"]
    },
    birthdate:{
        type: Date
    },
    gender:{
        type: String,
        default: "Indefinite"
    },
    profilePicture:{
        type: String
    },
    status:{
        type: Boolean,
        default: true
    }
})

userSchema.methods.toJSON = function(){
    const {password, _id, ...usuario} = this.toObject()
    usuario.uid = _id
    return usuario
}

export default model ("User", userSchema)