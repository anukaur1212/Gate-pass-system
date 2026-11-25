export const login = (req, res) => {

try{
    
    const { password, email } = req.body;
    
    if (!password || !email) 
    {
        return res.status(403).json({
            status: false,
            message: " fill the Password and email are required..."
        });
    }

     res.status(200).json({
        message: "Successfully response sent...",
        status: true
    });
} 
    catch (error) {
        res.status(500).json({
            message: error.message,
            status:false
        })
    }
}