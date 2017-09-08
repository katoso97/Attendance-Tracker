namespace attendancetracker.Controllers{
  export class AttendanceRecordController{
    public student;
    public daysArray;


    static $inject = ['studentService', '$state', '$stateParams'];

    constructor(private studentService, private $state, private $stateParams){
      this.student = this.studentService.studentBeingViewed;
      this.daysArray = this.student.attendanceRecord;
    }

    public test(){
      console.log(this.student);
      console.log(this.daysArray);
    }
  }

}
