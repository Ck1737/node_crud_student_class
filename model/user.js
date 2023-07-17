const mongoose = require('mongoose');

const student_data = new mongoose.Schema({

    name:{    
        type : String,
        ref:"exam"    
    },
    
    role:{    
        type : String,  
        enum : ['student','admin','teacher']  ,
        ref:"exam"
    }

    })
    
    const user_model = mongoose.model('user', student_data)
    
    module.exports = user_model;
