var express = require('express')
var router = express.Router()
const auth = require('../middelware/auth');
const passport = require('passport');

const { createStudent, viewStudent, findId, updateRecord, deleteRecord } = require("../controller/student");
const { creatExam, viewAllExam, findExamId, updateExamData, deleteExamData} = require('../controller/exam')
const { createSubject, viewAllSubject, findSubject, updateSubjectData, deleteSubjectData } = require('../controller/subject');
const { createSignUp, signInData, findAllData ,findData, deleteData, signOut} = require('../controller/registration');
const { resultData, allResult, findResult, updateResultData, resultDelete } = require('../controller/result');

//students crud.
router.post('/insert',createStudent);
router.get('/viewAllRecord',viewStudent);
router.get('/find/:id',findId);
router.put('/update/:id',updateRecord);
router.delete('/delete/:id',deleteRecord);

// Exam Crud
router.post('/insertExam',creatExam);
router.get('/findAllExam',viewAllExam);
router.get('/findData/:id',findExamId);
router.put('/updateExam/:id',updateExamData);
router.delete('/deleteExam/:id',deleteExamData);

// Subject Crud
router.post('/insertSubject',createSubject);
router.get('/findAllSubject',viewAllSubject);
router.get('/viewSubject/:id',findSubject);
router.put('/updateSubject/:id',updateSubjectData);
router.delete('/deleteSubject/:id',deleteSubjectData);


// Registration - auth

router.post('/signUp',createSignUp);
router.get('/signIn',signInData);
router.get('/viewData',passport.authenticate('jwt', { session: false }),findAllData);
router.get('/seachId/:id',passport.authenticate('jwt', { session: false }),findData);
router.delete('/deleteUser/:id',passport.authenticate('jwt', { session: false }),deleteData);
router.get('/logout',signOut);


// Result 
router.post('/insertResult',resultData);
router.get('/findAllresult',allResult);
router.get('/findResult/:id',findResult);
router.put('/updateResult/:id',updateResultData);
router.delete('/deleteResult/:id',resultDelete);

module.exports = router ;




