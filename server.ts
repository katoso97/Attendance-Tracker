import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';

//things we possibly will need
//import * as favicon from 'serve-favicon';
//import * as logger from 'morgan';
//import * as cookieParser from 'cookie-parser';

import students from './app/backend/api/students';
import users from './app/backend/api/users';
import attendance from './app/backend/api/attendanceRecords';

const CONNECTION_STRING = 'mongodb://Jack97:welcome@ds030500.mlab.com:30500/creightoncommunity';

mongoose.connect(CONNECTION_STRING).then(() => {
  console.log('We are connected to the database');
}).catch((err) => {
  console.log(err);
});

let app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./app/frontend/'));

app.use('/api/students', students);
app.use('/api/users', users);
app.use('/api/attendanceRecords', attendance);

app.get('*', (req, res, next) => {
  res.sendfile('app/frontend/index.html');
});

app.listen(3000);
console.log('listening on port 3000');
