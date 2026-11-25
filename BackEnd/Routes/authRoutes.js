import express from 'express';
import {login} from "../Controllers/loginControler.js";

export const authroute = express.Router()

authroute.post("/login", login)
