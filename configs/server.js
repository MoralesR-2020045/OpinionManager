'use strict'

import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import express from "express"
import { dbConnection } from "./mongo.js"
import routerAuth from "../src/auth/auth.routes.js"
import routerUser from "../src/user/user.routes.js"
import { createAdmin } from "../src/auth/auth.controller.js"

const middlewares = (app) =>{
    app.use(express.urlencoded({extended : false}));
    app.use(express.json());
    app.use(cors());    
    app.use(helmet());
    app.use(morgan("dev"));
}

const routes = (app) =>{
    app.use("/opinionManager/v1/auth", routerAuth);
    app.use("/opinionManager/v1/user", routerUser);
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
        createAdmin();
        app.listen(process.env.PORT)
        console.log(`Server running on port ${process.env.PORT}`)
    }catch(er){
        console.log(`Server init failde: ${err} `)
    }
}


