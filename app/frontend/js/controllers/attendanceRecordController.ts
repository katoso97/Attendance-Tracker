namespace attendancetracker.Controllers{
  export class AttendanceRecordController{
    public student;
    public daysArray;
    public currentDate;


    static $inject = ['studentService', '$state', '$stateParams'];

    constructor(private studentService, private $state, private $stateParams){
      this.student = this.studentService.studentBeingViewed;
      this.daysArray = this.student.attendanceRecord;
      this.currentDate = this.studentService.currentDate;
    }
  }

}
