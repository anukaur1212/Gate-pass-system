import express from 'express'
import {AddvisitorData, GetvisitorData,GetVisitorById, UpdateVisitorData, DeleteVisitorById } from '../Controllers/VisitorEntryControler.js';

export const visitorroute = express.Router()

// to post data
visitorroute.post("/postvisitor", AddvisitorData)


// to get data
visitorroute.get("/getvisitor", GetvisitorData)

// to get visitor by id
visitorroute.get("/getvisitor/:id",GetVisitorById)

// to update visitor data
visitorroute.put("/update/:id",UpdateVisitorData);

// to delete visitor data
visitorroute.delete("/deletevisitor/:id",DeleteVisitorById)
