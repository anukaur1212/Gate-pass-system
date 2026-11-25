import express from 'express'
import { PostEmployeeData } from '../Controllers/EmployeeControler.js'

export const employeeroute = express.Router()

employeeroute.post('/postemployee',PostEmployeeData)