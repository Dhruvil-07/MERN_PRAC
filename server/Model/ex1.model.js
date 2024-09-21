const mongoose = require('mongoose');

//create user schema
const UserSchema = mongoose.Schema({
    name : 
    {
        type:String,
        require : true,
    },
    email:
    {
        type : String,
        require : true,
        unique : true,
    },
    address:
    {
        type : String,
        require : true,
    },
    gender :
    {
        type : String,
        require : true,
        enum : ["male","female"],
        default : 'male',
    },
    hobby :
    {
        type : [],
    },
    dob:
    {
        type : String,
        require : true,
    },
    qualification :
    {
        type : String,
        require : true,
        enum : ["Bechlore","Masters","P.H.D."],
    }
});

const UserModel =  mongoose.model('users',UserSchema);

module.exports = UserModel;