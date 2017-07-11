import * as mongoose from 'mongoose';

export interface Student extends mongoose.Document {
  firstName: string;
  lastName: string;
  school: string;
  age: number;
  gradeLevel: string;
  parent: string;
  parentPhoneNumber: string;
  address: string;
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
  age: {
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
  address: {
    type: String,
    required: false
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
