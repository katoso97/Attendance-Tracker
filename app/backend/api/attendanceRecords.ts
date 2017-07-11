import * as express from 'express';
import AttendanceRecord from '../models/attendanceRecord';

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

// add AttendanceRecord
router.post('/', (req, res) => {
  let newAttendanceRecord = new AttendanceRecord();
  newAttendanceRecord.attendance = req.body.attendance;
  newAttendanceRecord.save().then((newAttendanceRecord) => {
    res.json(newAttendanceRecord)
  }).catch((err) => {
    res.json(err);
  });
});

// update AttendanceRecord
router.put('/:id', (req, res) => {
  // let attendanceRecordId = req.params.id;
  AttendanceRecord.findOne({_id: req.params.id}).then((attendanceRecord) => {

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
