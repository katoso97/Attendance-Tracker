import * as express from 'express';
import AttendanceRecord from '../models/attendanceRecord';
import Student from '../models/student';

let router = express.Router();

// get all AttendanceRecords
router.get('/', (req, res) => {
  AttendanceRecord.find().then((attendanceRecords) => {
    res.json(attendanceRecords);
  }).catch ((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// get one AttendanceRecord
router.get('/:id', (req, res) => {
  AttendanceRecord.findById(req.params.id).then((attendanceRecord) => {
    res.json(attendanceRecord);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

// add  new AttendanceRecord
router.post('/', (req, res) => {
  let newAttendanceRecord = new AttendanceRecord();
  newAttendanceRecord.date = req.body.date;
  newAttendanceRecord.students = req.body.students;
  newAttendanceRecord.save().then((newAttendanceRecord) => {
    res.json(newAttendanceRecord)
  }).catch((err) => {
    res.json(err);
  });
});

// Add students to AttendanceRecord
router.put('/:date', (req, res) => {
  let attendanceRecordDate = req.params.date;
  AttendanceRecord.findOne({_id: req.params.date}).then((attendanceRecord) => {
    console.log(AttendanceRecord);
    attendanceRecord.save().then((updatedAttendanceRecord) => {
      res.json(updatedAttendanceRecord);
    }).catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
  });
});

// delete AttendanceRecord
router.delete('/:id', (req, res) => {
  let attendanceRecordId = req.params['id'];
  AttendanceRecord.remove({_id: attendanceRecordId}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    console.log(err);
    res.status(400).json(err);
  });
});

export default router;
