'use strict'

import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import express from "express"
import { dbConnection } from "./mongo.js"

const middlewares = (app) =>{
    app.use(express.urlencoded({extended : false}));
    app.use(express.json());
    app.use(cors());    
    app.use(helmet());
    app.use(morgan("dev"));
}

const routes = (app) =>{


}

const conectarDB = async () => {
    try{
        await dbConnection()
    }catch(err){
        console.log(`Database connecttion failed: ${err}`)
        process.exit(1)
    }
}

export const initServer = () =>{
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        app.listen(process.env.PORT)
        console.log(`Server running on port ${process.env.PORT}`)
    }catch(er){
        console.log(`Server init failde: ${err} `)
    }
}


