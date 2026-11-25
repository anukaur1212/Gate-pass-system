import { postEmployee } from "../Models/EmployeeModel.js"

export const PostEmployeeData = async (req, res) => {

    try {
        const {name,fname,email,phone,dob,gender,linkedin_url,address,aadhar} = req.body

        // validate required fields
        if (!name || !fname || !email || !phone || !dob || !gender || !linkedin_url || !address,aadhar) {
            return res.status(403).json({
                status: false,
                message: "fill all the required fields"
            })
        }

        const postemployee = await postEmployee(name,fname,email,phone,dob,gender,linkedin_url,address,aadhar)

        if (!postemployee)
            return res.status(404).json({
                status: false,
                message: "employee data not found"
            })

        return res.status(200).json({
            status: true,
            data: postemployee,
            message: "data inserted successfully"
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}
