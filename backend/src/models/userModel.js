import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import {SchtroumpfSchema} from "./SchtroumpfModel";

const Schema=mongoose.Schema;

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

export const UserSchema=new Schema({

    firstname:{
      type:String,
    },

    lastname:{
      type:String,
    },

    username:{
        type:String,
    },

    email:{
        type:String,
        required:true,
      validate: [validateEmail, 'Please fill a valid email address'],
    },

    hashPassword:{
        type:String,
        minlength: 8,
    },

   amis:[SchtroumpfSchema],

  confirmPassword:{
    type:String,
  },



    created_date:{
        type:Date,
        default:Date.now
    }
});

UserSchema.methods.comparePassword = (password, hashPassword) => {
    return bcrypt.compareSync(password, hashPassword);
}
