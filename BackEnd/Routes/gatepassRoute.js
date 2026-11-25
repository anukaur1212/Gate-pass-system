import express from 'express'
import { AddGatePassData, DeleteGatePass, GetGatePassbyId, GetGatePassData, UpdateGatePass, updateGateStatus } from '../Controllers/GatePassControler.js'

export const gatepassroute = express.Router()

// to post data
gatepassroute.post('/postgate',AddGatePassData)

// to get data
gatepassroute.get('/getgate',GetGatePassData)

// to delete gate pass
gatepassroute.delete('/deletegate/:id',DeleteGatePass)

// to get data by id
gatepassroute.get('/getgateid/:id',GetGatePassbyId)

// to put updated data 
gatepassroute.put('/updategate/:id',UpdateGatePass)

gatepassroute.patch('/updatestatus/:id',updateGateStatus)