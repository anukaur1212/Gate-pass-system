import express from 'express'
import { userdata } from '../Controllers/userControler.js';

export const userRoute = express.Router()

userRoute.get("/users", userdata)
