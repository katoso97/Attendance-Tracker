namespace attendancetracker.Controllers{
  export class AttendanceController{
    public students;
    public times;
    public classes;
    public x;
    public isReady = false;

    static $inject = ['studentService', '$state', '$window'];

    constructor(private studentService, private $state, private $window){
      this.classes = [
        {classTime: '', classStudents: [{}]}
      ]
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
        this.isReady = true;
      })
        //separating students by class time
        while(this.x == 0){
         if(this.isReady == true && this.students.$resolved == true){
           for(let i = 8; i < 18; i++){
             // sort through each student
             if(this.students[i].classTime != this.students[i - 1].classTime){
               this.x++
             }
             this.classes[this.x].classTime = this.students[i].classTime;
             this.classes[this.x].classStudents.push(this.students[i])
             // compare each classtime to the next. If they don't match, increase counting variable and push to new array in classes

           }
           console.dir(this.classes);
         }
        }
        // this.x = 0;





    }
    //delete studnet
    public deleteStudent(student){
      return this.studentService.deleteStudent(student._id).then(() => {
        console.log("Deleted " + student.firstName + ' ' + student.lastName + " from classTime" + student.classTime);
        this.$window.location.reload();
      })
    }


  }
}
