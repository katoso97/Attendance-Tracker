namespace attendancetracker.Controllers{
  export class AttendanceController{
    public students;
    public times;

    static $inject = ['studentService'];

    constructor(private studentService){
      this.studentService.getAllStudents().then((data) => {
        this.students = data;
        console.log(this.students)
      })
      .then(() => {
        this.students.sort(function(a, b){
          if(a.lastName < b.lastName) return -1;
          if(a.lastName > b.lastName) return 1;
          return 0;
        })
        console.log(this.students);
      })
    }
    

  }
}
