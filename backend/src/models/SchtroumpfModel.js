import mongoose from 'mongoose';

const Schema=mongoose.Schema;

export const SchtroumpfSchema=new Schema({
  name:{
    type:String,
    required:'Entrer un nom'
  },


  email:{
    type:String,
  },


  adresse:{
    type:String,
  },

  famille:{
    type:String,
  },

  race:{
    type:String,
  },

  nourriture:{
    type:String,
  },

  age:{
    type:Number,
  },

  created_date:{
    type:Date,
    default:Date.now
  }
})
