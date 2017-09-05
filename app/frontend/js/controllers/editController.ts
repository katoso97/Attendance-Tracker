namespace attendancetracker.Controllers{
  export class EditController{
    public studentId;

    static $inject = ['studentService', '$stateParams', '$state', '$window'];

    constructor(private studentService, private $stateParams, private $state, private $window){
      this.studentId = this.$window.localStorage.studentId;
      console.log(this.$window.localStorage.studentId);
      console.log('hello');
    }
  }
}
