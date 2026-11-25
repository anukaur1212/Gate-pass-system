import { getVisitors, postVisitors, getVisitorById, updateVisitor, deleteVisitor } from "../Models/VisitorEntrymodel.js"


//api created for add the data in vistor_table
export const AddvisitorData = async (req, res) => {

    try {
        const { name, phone, visitPurpose, inTime, outTime, meetingTo} = req.body

        const visitordata = await postVisitors(name, phone, visitPurpose, inTime, outTime, meetingTo)


        if (!name || !phone || !visitPurpose || !inTime || !outTime || !meetingTo) {
            return res.status(403).json({
                status: false,
                message: "fill all the required fields"
            })
        }

        if (!visitordata)
            return res.status(404).json({
                status: false,
                message: "visitor not found"
            })

        return res.status(200).json({
            status: true,
            data: visitordata,
            message: "data inserted successfully"
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

//get all table data from vistor_table
export const GetvisitorData = async (req, res) => {

    try {
        const getVisitorData = await getVisitors()

        if (!getVisitorData)
            return res.status(404).json({
                status: false,
                message: "data not found"
            })

        return res.status(200).json({
            status: true,
            data: getVisitorData,
            message: "data fetched successfully"
        })

    } catch (error) {
        return res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

// get selected visitor data 
export const GetVisitorById = async (req, res) => {
    try {
        const { id } = req.params
        const visitor = await getVisitorById(id)
        if (!visitor) {
            return res.status(404).json({
                status: false,
                message: "Visitor not found"
            })
        }
        return res.status(200).json({
            status: true,
            data: visitor,
            message: "data fetched successfully"
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.meesage
        })
    }
}

// update table data 
export const UpdateVisitorData = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await updateVisitor(id, req.body);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                status: false,
                message: "Visitor not found"
            });
        }

        return res.status(200).json({
            status: true,
            message: "Visitor updated successfully"
        });

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        });
    }
};

// to delete selected visitor
export const DeleteVisitorById = async(req,res)=>
{
    try {
        const {id} = req.params
        const visitor = await deleteVisitor(id)

        if(!visitor)
        {
            return res.status(404).json({
                status:false,
                message:"visitor not found"
            })
        }
        return res.status(200).json({
            status:true,
            message:"data deleted successfully"
        })

    } catch (error) {
       return res.status(500).json({
            status:false,
            message:error.message
        })
    }
}