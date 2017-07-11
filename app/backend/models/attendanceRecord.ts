import * as mongoose from 'mongoose';
import {Student} from './student';
import studentSchema from './student';

// export interface AttendanceRecord extends mongoose.Document{
//   date:string;
//   attendance: Student[];
// }
//
// let attendanceSchema = new mongoose.Schema({
//   date: {
//     type: String,
//     required: true
//   },
//   attendance: {
//     type: [studentSchema]
//   }
// });
// 
// export default mongoose.model<AttendanceRecord>('AttendanceRecord', attendanceSchema);
