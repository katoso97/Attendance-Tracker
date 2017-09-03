namespace attendancetracker.Controllers{
  export class AttendanceController{
    public students;
    public times;

    static $inject = ['studentService', '$state'];

    constructor(private studentService, private $state){

      //Sort students by time
      this.studentService.getAllStudents().then((data) => {
        this.students = data;
        console.log(this.students)
      })
      .then(() => {
        this.students.sort(function(a, b){
          if(a.classTime < b.classTime) return -1;
          if(a.classTime > b.classTime) return 1;
          return 0;
        })
        console.log(this.students);
      })
    }
    //delete studnet
    public deleteStudent(student){
      return this.studentService.deleteStudent(student._id).then(() => {
        console.log("Deleted " + student.firstName + ' ' + student.lastName + " from classTime" + student.classTime);
        this.$state.go('home');
      })
    }


  }
}
