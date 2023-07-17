const mongoose = require('mongoose');
const { schema } = require('./exam_model');
const Schema = mongoose.Schema;

const signUp_data = new Schema ({
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    token:{
        type:String
    }

})

const signUp_model = mongoose.model('signUp',signUp_data);

module.exports = signUp_model;
