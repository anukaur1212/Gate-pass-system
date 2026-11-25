import dotenv from 'dotenv';
dotenv.config();

import cors from 'cors'

import { pool } from './config/db.js';
import express from 'express'
import { authroute } from './Routes/authRoutes.js';
import { userRoute } from './Routes/userRoutes.js';
import { visitorroute } from './Routes/visitorRoute.js';
import { gatepassroute } from './Routes/gatepassRoute.js';
import { router } from './Routes/imageRoutes.js';
import { employeeroute } from './Routes/employeeRoutes.js';


const allOrigins = [
    'http://localhost:5173',
    'http://localhost:5000',
    process.env.FRONTEND_URL
]


const corsOptions  = {
    origin:allOrigins,
    credentials: true
}

const app = express();

const PORT = 5000

// allow fronted origins
app.use(cors(corsOptions));


// for used to use api (post)
app.use(express.json());

pool.connect();

app.use('/auth', authroute)
app.use('/api', userRoute)

// visitor entry
app.use('/visit', visitorroute)

// gate pass data
app.use('/gate',gatepassroute)


// employee data
app.use('/employee',employeeroute)



// cloundinary
app.use("/api/image", router);

app.listen(PORT, () =>{
    console.log(`server running ${PORT}` )
})


