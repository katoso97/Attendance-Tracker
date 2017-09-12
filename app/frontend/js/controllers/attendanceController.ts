namespace attendancetracker.Controllers{
  export class AttendanceController{
    public students;
    public times;
    public classes;
    public isReady = false;
    public displayingStudents = false;

    static $inject = ['studentService', '$state', '$window'];

    constructor(private studentService, private $state, private $window){
      this.classes = [{classTime: '', classStudents: [{}]}]
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
      //end of constructor
    }
    //delete student
    public deleteStudent(student){
      return this.studentService.deleteStudent(student._id).then(() => {
        console.log("Deleted " + student.firstName + ' ' + student.lastName + " from classTime" + student.classTime);
        this.$window.location.reload();
      })
    }
    public sortByTimePeriod(){
      let x = 0;
      this.classes[0].classTime = this.students[0].classTime;
      this.classes[0].classStudents.push(this.students[0])
      this.classes[0].classStudents.splice(0, 1);
      // console.log(this.classes);
      // console.log(this.classes[this.x])
      // let classes = [{classTime: '', classStudents: [{}]}]
      for(let i = 1; i < this.students.length; i++){
        // sort through each student
        if(this.students[i].classTime != this.classes[x].classTime){
          x++
          this.classes.push({classTime: '', classStudents: [{}]})
          this.classes[x].classStudents.pop();
        }
        this.classes[x].classTime = this.students[i].classTime;
        this.classes[x].classStudents.push(this.students[i])

        // compare each classtime to the next. If they don't match, increase counting variable and push to new array in classes

      }
      this.studentService.classes = this.classes;
      console.log(this.classes)
      this.displayingStudents = true;
    }
    public goToEditPage(clickedStudent){
      return this.studentService.getStudentById(clickedStudent._id).then((res) => {
        this.studentService.studentBeingEdited = clickedStudent;
        this.$state.go('editStudent', {id: res._id})

      });
    }
    public goToStudentAttendanceRecordPage(clickedStudent){
      return this.studentService.getStudentById(clickedStudent._id).then((res) => {
        this.studentService.studentBeingViewed = clickedStudent;
        this.$state.go('studentView', {id: res._id})

      });
    }
    public displayClassForAttendance(clickedClassTime){
      console.log(clickedClassTime);
      this.studentService.currentClass = this.classes[this.objectIndexOf(clickedClassTime)];
      console.log(this.studentService.currentClass)
      this.$state.go('takeAttendance');
    }
    public objectIndexOf(chosenTime) {
    for (var i = 0; i < this.classes.length; i++) {
        if (this.classes[i].classTime == chosenTime) {
            return i;
        }
    }
    return -1;
}


  }//end of controller
}
