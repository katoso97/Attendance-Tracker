namespace attendancetracker.Controllers{
  export class TakeAttendanceController{


    static $inject = ['studentService', '$state', '$stateParams'];

    constructor(private stuidentService, private $state, private $stateParams){

    }
  }
}
