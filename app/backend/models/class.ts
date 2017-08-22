import * as mongoose from 'mongoose';
import {Student} from './student';

export interface Class extends mongoose.Document{
  timePeriod: string;
  students: Student[];
}

let classSchema = new mongoose.Schema({
  timePeriod: {
    type: String,
    required: true
  },
  students: {
    type:Array,
    required: true
}
});

export default mongoose.model<Class>('Class', classSchema);
