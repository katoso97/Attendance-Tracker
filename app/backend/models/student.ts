import * as mongoose from 'mongoose';

export interface Student extends mongoose.Document {
  firstName: string;
  lastName: string;
  school: string;
  birthday: number;
  gradeLevel: string;
  parent: string;
  parentPhoneNumber: string;
  studentPhoneNumber: string;
  address: string;
  classTime: string;
  attendInteract: string;
}

let studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  school: {
    type: String
  },
  birthday: {
    type: Number,
    required: false
  },
  gradeLevel: {
    type: String,
    required: false
  },
  parent: {
    type: String
  },
  parentPhoneNumber: {
    type: String
  },
  studentPhoneNumber: {
    type: String
  },
  address: {
    type: String,
    required: false
  },
  classTime: {
    type: String,
    required: true
  },
  attendInteract: {
    type: String,
    required: false
  },
  present:{
    type:String
  }
});

export default mongoose.model<Student>('Student', studentSchema);
