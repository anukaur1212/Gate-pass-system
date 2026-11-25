import express from 'express'
import { Home } from '../Handler/Home.js'
import { LoginHandler } from '../Handler/Login.js'
import { processLogin } from '../Handler/Process-login.js'
import { Logout } from '../Handler/Logout.js'


export const allroute = express.Router()

allroute.get('/',Home)

allroute.get('/login',LoginHandler)

allroute.post('/process-login',processLogin)

allroute.get('/logout',Logout)