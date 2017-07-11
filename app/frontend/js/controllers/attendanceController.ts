namespace attendancetracker.Controllers{
  export class AttendanceController{
    public students = [];

    static $inject = ['studentService'];

    constructor(private studentService){
      
    }

  }
}
