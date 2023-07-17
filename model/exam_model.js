const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examSchema = new Schema({

name:{
    type : String
},
date:{
    type : Date
},
subject:{
    type : String   
},
teacher_id:[{
    type: Schema.Types.ObjectId, 
    ref: "user"
}]

})

const exam_model = mongoose.model('exam', examSchema)

module.exports = exam_model;