import * as express from 'express';
import Student from '../models/student';

let router = express.Router();

// get all students
router.get('/', (req, res) => {
  Student.find().then((students) => {
    res.json(students);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// get one student
router.get('/:id', (req, res) => {
  Student.findById(req.params.id).then ((student) => {
    res.json(student);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// add student
router.post('/', (req, res) => {
  let newStudent = new Student();
  newStudent.firstName = req.body.firstName;
  newStudent.lastName = req.body.lastName;
  newStudent.school = req.body.school;
  newStudent.age = req.body.age;
  newStudent.gradeLevel = req.body.gradeLevel;
  newStudent.parent = req.body.parent;
  newStudent.parentPhoneNumber = req.body.parentPhoneNumber;
  newStudent.address = req.body.address;
  newStudent.save().then((newStudent) => {
    res.json(newStudent)
  }).catch((err) => {
    res.json(err);
  });
});

// update student
router.put('/:id', (req, res) => {
  // let studentId = req.params.id;
  Student.findOne({_id: req.params.id}).then((student) => {
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.school = req.body.school;
    student.age = req.body.age;
    student.gradeLevel = req.body.gradeLevel;
    student.parent = req.body.parent;
    student.parentPhoneNumber = req.body.parentPhoneNumber;
    student.address = req.body.address;
    student.save().then((updatedStudent) => {
      res.json(updatedStudent);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });
});

// delete student
router.delete('/:id', (req, res) => {
  let studentId = req.params['id'];
  Student.remove({_id: studentId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

export default router;
