const { request } = require('express');
const result_model = require('../model/result_model');

// create Result
resultData = async (req,res) => {
    const {
        student_id,
        exam_id,
        marks
    }=req.body

    const data = await result_model.create(req.body); 

    res.status(200).json({
        status:"Result Insert....",
        data
    })
}


// View All Result
allResult = async (req,res) => {
    
    const result = await result_model.find().populate(['exam_id', 'student_id']).exec();

    res.status(200).json({
        status:"View All Result",
        result        
    })
}

// View Result By Id
findResult = async (req,res) =>{

    var id = req.params.id;
    const result = await result_model.findById(id).populate(['exam_id', 'student_id']).exec();

    res.status(200).json({
        status:"Find Record....",
        result
    })
}

// Update Result By ID

updateResultData = async (req,res) => {
    var id = req.params.id;
    var marks = req.body.marks;

    var update = await result_model.findByIdAndUpdate(id,{marks:marks});
    var update = await result_model.findById(id);

    res.status(200).json({
        status:"Update Record....",
        update
    })
}

// Delete Result

resultDelete = async (req,res) => {

    var id = req.params.id;
    var data = await result_model.findByIdAndDelete(id);   

    res.status(200).json({
        status:"Delete Record....",
        data
    })
}

module.exports = {
    resultData,
    allResult,
    findResult,
    updateResultData,
    resultDelete
}