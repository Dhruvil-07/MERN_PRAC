const UserModel = require('../Model/ex1.model');

//get all user
async function getalluser(req,res)
{
    try
    {
        const UserData = await UserModel.find();

        return res.status(200).json({
            data : UserData,
        });
    }
    catch(e)
    {
        return res.status(500).json({
            msg : "Internal Server Error",
        });
    }
}

//get specific user
async function getspecificuser(req,res)
{
    try
    {
        const UserData = await UserModel.findOne({_id : req.params.id});
        
        if(!UserData)
        {
            return res.status(404).json({
                msg : "User Not Register",
            });
        }
        
        return res.status(200).json({
            msg : "Success",
            data : UserData,
        });
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json({
            msg : "Internal Server Error",
        });
    }
}

//carete new user
async function adduser(req,res)
{
    try
    {
        console.log(req.body);
        const UserObj = new UserModel(req.body);
        const Userdata = await UserObj.save();

        return res.status(201).json({
            msg : "success",
            data : Userdata,
        });
    }
    catch(e)
    {
        console.log(e.message);
        return res.status(500).json({
            msg : "internal server",
        });
    }
}

//update Specific User
async function updateuser(req,res)
{
    try
    {
        const UserData = await UserModel.findOne({_id : req.params.id});
        
        if(!UserData)
        {
            return res.status(404).json({
                msg : "User Not Register",
            });
        }
        
        const UpdatedData = await UserModel.findByIdAndUpdate(req.params.id , req.body);
        
        if(!UpdatedData)
        {
            return res.status(400).json({
                msg : "Failed To update",
            });
        }

        return res.status(201).json({
            msg : "Data Updated SuccessFUlly",
        });

    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json({
            msg : "Internal Server Error",
        });
    }
}

//delete User
async function deleteUser(req,res)
{
    try
    {
        const UserData = await UserModel.findOne({_id : req.params.id});
        
        if(!UserData)
        {
            return res.status(404).json({
                msg : "User Not Register",
            });
        }
        
        const DeletedData = await UserModel.findByIdAndDelete({_id:req.params.id});
        
        if(!DeletedData)
        {
            return res.status(400).json({
                msg : "Failed To delete",
            });
        }

        return res.status(201).json({
            msg : "Data Deleted SuccessFUlly",
        });

    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json({
            msg : "Internal Server Error",
        });
    }
}

//serach data
async function searchdata(req,res)
{
    try
    {
        const key = req.params.key;

        const data = await UserModel.find({
            $or : [
                {name : new RegExp(key,"i")},
                {email : new RegExp(key,"i")},
                {gender : new RegExp(key,"i")},
                {address : new RegExp(key,"i")},
            ]
        });

        return res.status(200).json({
            data : data,
        });
    }
    catch(e)
    {
        console.log(e);
        return res.status(500).json({
            msg : "Internal Server Error",
        });
    }
}

module.exports = {
    getalluser,
    getspecificuser,
    adduser,
    updateuser,
    deleteUser,
    searchdata,
}