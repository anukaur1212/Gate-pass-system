
 const userData = {
    "name": "lakhwinder",
    "id": "473417432",
    "age": 22,
}

export const userdata = (req, res)=>{

    res.status(200).json({
        message: "succesfully respose send...",
        data: userData,
        status: true
    })
}