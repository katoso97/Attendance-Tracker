import * as mongoose from 'mongoose';

export interface Student extends mongoose.Document {
  firstName: string;
  lastName: string;
  school: string;
  birthday: string;
  gradeLevel: string;
  parent: string;
  parentPhoneNumber: string;
  studentPhoneNumber: string;
  address: string;
  classTime: string;
  attendInteract: string;
  attendanceRecord: object[]
}
// interface IDays extends mongo ose.Document{
//   day: {
//     date: string,
//     status: string
//   }
// }
let daySchema = new mongoose.Schema({
  date: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
})

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
    type: String,
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
  attendanceRecord: {
    type: Array
  }
});
// export mongoose.model<IDays>('IDays', daySchema)
export default mongoose.model<Student>('Student', studentSchema);
