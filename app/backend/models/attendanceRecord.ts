import * as mongoose from 'mongoose';
import {Student} from './student';
import studentSchema from './student';

export interface AttendanceRecord extends mongoose.Document{
  date:string;
  students: Student[];
}

let attendanceSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  students: {
    type:Array,
    required: true
}
});

export default mongoose.model<AttendanceRecord>('AttendanceRecord', attendanceSchema);
