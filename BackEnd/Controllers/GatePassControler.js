import { deleteGatePass, getGatePass, getGatePassbyId, postGatePass, updateGatePass, UpdateStatus } from "../Models/GatePassmodel.js"

//api created for add the data in gate-pass table
export const AddGatePassData = async (req, res) => {

    try {
        const { type, product, pass_number, quantity, est_price, serial_number, organization,
            person_name, email, contact, expt_return, address, additional_note } = req.body

        // validate required fields
        if (!type || !product || !pass_number || !quantity || !est_price || !serial_number || !organization
            || !person_name || !email || !contact || !address || !additional_note) {
            return res.status(403).json({
                status: false,
                message: "fill all the required fields"
            })
        }

        // rgp requires return date
        if (type === "rgp" && !expt_return) {
            return res.status().json({
                status: false,
                message: "return date is required for RGP"
            })
        }

        // nrgp requires date should be null
        const returnDate = type === "rgp" ? expt_return : null

        const gatepassdata = await postGatePass(type, product, pass_number, quantity,
            est_price, serial_number, organization, person_name, email, contact,
            returnDate, address, additional_note)

        if (!gatepassdata)
            return res.status(404).json({
                status: false,
                message: "gate pass data not found"
            })

        return res.status(200).json({
            status: true,
            data: gatepassdata,
            message: "data inserted successfully"
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

//get all table data from gate_pass_system
export const GetGatePassData = async (req, res) => {

    try {
        const getGatePassData = await getGatePass()

        if (!getGatePassData)
            return res.status(404).json({
                status: false,
                message: "data not found"
            })

        return res.status(200).json({
            status: true,
            data: getGatePassData,
            message: "data fetched successfully"
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

// to delete row 
export const DeleteGatePass = async (req, res) => {
    try {
        const { id } = req.params
        const deleteGate = await deleteGatePass(id)

        if (!deleteGate) {
            res.status(404).json({
                status: false,
                message: "record not found"
            })
        }

        res.status(200).json({
            status: true,
            data: deleteGate,
            message: "record deleted successfully"
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: "server error"
        })
    }

}

// get selected gate pass data 
export const GetGatePassbyId = async (req, res) => {
    try {
        const { id } = req.params
        const gatepass = await getGatePassbyId(id)

        if (!gatepass) {
            return res.status(404).json({
                status: false,
                message: "data not found"
            })
        }
        return res.status(200).json({
            status: true,
            data: gatepass,
            message: "data fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.meesage
        })
    }
}

export const UpdateGatePass = async (req, res) => {
    try {
        const { id } = req.params
        const updateGatedata = await updateGatePass(id, req.body)

        if (!updateGatedata) {
            return res.status(404).json({
                status: false,
                message: "data not found"
            })
        }
        res.status(200).json({
            status: true,
            data: updateGatedata,
            message: "data updated successfully"
        })

    } catch (error) {
        return res.status(500).json({
            message: false,
            message: error.message
        })
    }
}

export const updateGateStatus = async (req, res) => {
    try {
        const { id } = req.params
        const updateGatedata = await UpdateStatus(id, req.body)

        if (!updateGatedata) {
            return res.status(404).json({
                status: false,
                message: "data not found"
            })
        }
        res.status(200).json({
            status: true,
            data: updateGatedata,
            message: "data updated successfully"
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}