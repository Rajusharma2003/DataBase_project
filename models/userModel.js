
// only create schema
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true ,
      required : [true , 'Email is required']
    },
    password: {
        type : String,
        unique :true,
        required : [true , "password is required"]
    },
    name: {
        type : String,
        unique : true,
        required : [true , 'Name is required']
    }
  });
  

  
module.exports = mongoose.model('User', UserSchema);


