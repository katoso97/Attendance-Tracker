namespace attendancetracker.Controllers{
  export class TakeAttendanceController{
    public currentClass;

    static $inject = ['studentService', '$state', '$stateParams'];

    constructor(private studentService, private $state, private $stateParams){
    this.currentClass = this.studentService.currentClass;
    }

    public takeAttendance(){
      console.log(this.currentClass);
    }
  }
}
