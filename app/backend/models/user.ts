import * as mongoose from 'mongoose';

interface User extends mongoose.Document{
  firstName:string;
  lastName:string;
  email:string;
  username:string;
  password:string;
}

let userSchema = new mongoose.Schema({
  firstName:{
    required:true,
    type: String
  },
  lastName: {
    required:true,
    type: String
  },
  email: {
    required:true,
    type: String,
    unique: true
  },
  username: {
    required:true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String
  }
});

export default mongoose.model<User>('User', userSchema);
