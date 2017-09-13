namespace attendancetracker.Controllers{
  export class TakeAttendanceController{
    public currentClass;
    public studentArray;
    public currentDate;

    static $inject = ['studentService', '$state', '$stateParams'];

    constructor(private studentService, private $state, private $stateParams){
    this.currentClass = this.studentService.currentClass;
    this.currentDate = this.studentService.currentDate;
    }

    public isPresent(student){
    let currentStudent = student;
    let arrayLength = currentStudent.attendanceRecord.length;
    //if already clicked absent
    if(currentStudent.attendanceRecord[arrayLength - 1].date === this.currentDate
       && currentStudent.attendanceRecord[arrayLength - 1].status === "absent"){
         currentStudent.attendanceRecord[arrayLength - 1].status = "present";
       }
    //if alrady clicked present
     else if(currentStudent.attendanceRecord[arrayLength - 1].date === this.currentDate
        && currentStudent.attendanceRecord[arrayLength - 1].status === "present"){
        //do nothing
      }
      //if all is good
      else{
      currentStudent.attendanceRecord.push({date: this.currentDate, status: "present"})
      }
      //delete initial data
      if(currentStudent.attendanceRecord[0].date == "" && currentStudent.attendanceRecord[0].status == ""){
        currentStudent.attendanceRecord.splice(0, 1);
      }
      //check days present
      let secondArrayLength = currentStudent.daysPresent.length;
      if(currentStudent.daysPresent[secondArrayLength - 1].date == this.currentDate){
        //do nothing
      } else{
        currentStudent.daysPresent.push({date: this.currentDate});
      }
      //delete initial data
      if(currentStudent.daysPresent[0].date == ""){
        currentStudent.daysPresent.splice(0, 1);
      }
      return this.studentService.updateStudent(currentStudent._id, currentStudent);
    }

    public isAbsent(student){
      let currentStudent = student;
      let arrayLength = currentStudent.attendanceRecord.length;
      //if already clicked present
      if(currentStudent.attendanceRecord[arrayLength - 1].date === this.currentDate
         && currentStudent.attendanceRecord[arrayLength - 1].status === "present"){
           currentStudent.attendanceRecord[arrayLength - 1].status = "absent";
         }
      //if alrady clicked absent
       else if(currentStudent.attendanceRecord[arrayLength - 1].date === this.currentDate
          && currentStudent.attendanceRecord[arrayLength - 1].status === "absent"){
          //do nothing
        }
        //if all is good
        else{
        currentStudent.attendanceRecord.push({date: this.currentDate, status: "absent"})
        }
        //delete initial data
        if(currentStudent.attendanceRecord[0].date == "" && currentStudent.attendanceRecord[0].status == ""){
          currentStudent.attendanceRecord.splice(0, 1);
        }
        //check days present
        let secondArrayLength = currentStudent.daysPresent.length;
        if(currentStudent.daysPresent[secondArrayLength - 1].date == this.currentDate){
          currentStudent.daysPresent.splice(secondArrayLength - 1, 1)
        } else{
          //do nothing
        }
      return this.studentService.updateStudent(currentStudent._id, currentStudent);
    }

    public takeAttendance(){
      this.$state.go('attendance');
    }
  }
}
