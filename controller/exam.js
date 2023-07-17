const exam_model = require("../model/exam_model");
const user_model = require("../model/user");

// Create Exam

creatExam = async (req, res) => {
  const { name, date, subject, teacher_id } = req.body;
  const teacher = await user_model.findById({ _id: teacher_id });
  if (teacher && teacher.role === "teacher") {
    const data = await exam_model.create(req.body);

    const result = {
        id:data._id,
        name,
        date,
        subject,
        teacher_id,
      teacherName: teacher.name,
      teacherRole: teacher.role
    };

    return res.status(200).send({
      status: "Exam created....",
      data: result,
    });
  } else {
    return res.status(400).send({
      status: "teacher not found",
    });
  }
};

// View All Exam List

viewAllExam = async (req, res) => {

  var data = await exam_model.find().populate('teacher_id').exec();
  // var findExam = await user_model.find ({role: { $in: ["teacher"] } });         // valid method find by particular role
  // var findExam = await user_model.aggregate([ {$match:{ role: 'teacher'}} ]);   // valid method find by particular role
  // var findExam = await user_model.find({ role: 'teacher' });                     //valid method find by particular role
    
  res.status(200).json({
    status: "View All Exam List",
    data
  });
};

// Find Exam Record By Id

findExamId = async (req, res) => {

  var id = req.params.id;
  var findExam = await exam_model.findById(id).populate('teacher_id').exec();  

  res.status(200).json({
    status: "Find Record.....",
    findExam
  });
};

// Update Record By Id
updateExamData = async (req, res) => {

  var id = req.params.id;
  var subject = req.body.subject;

  var updateData = await exam_model.findByIdAndUpdate(id, { subject: subject });
  var data = await exam_model.findById(id).populate('teacher_id').exec();

  res.status(200).json({
    status: "Updated Record.... ",
    data
  });
};

deleteExamData = async (req, res) => {
  
  var id = req.params.id;
  var data = await exam_model.findByIdAndDelete(id);

  res.status(200).json({
    status: "Delete Record....",
    data
  });
};

module.exports = {
  creatExam,
  viewAllExam,
  findExamId,
  updateExamData,
  deleteExamData
};
