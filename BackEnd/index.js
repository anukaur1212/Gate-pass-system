import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import session from 'express-session'
import { allroute } from './Routing/AllRoutes.js'

const app = express()

const PORT = 5000

app.use(session({
        secret:process.env.SECRET_KEY,
        cookie:{
            maxAge:1000*60*60*24,
        },
        resave:true,
        saveUninitialized:false,
    }))

app.use(express.json());
app.use(express.urlencoded({extended:true}))



app.use("/",allroute)


app.listen(PORT,()=>
{
    console.log(`server is running, ${PORT}`)
})