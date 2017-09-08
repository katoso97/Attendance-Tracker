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
      if(currentStudent.attendanceRecord[0].date == "" && currentStudent.attendanceRecord[0].status == ""){
        currentStudent.attendanceRecord.splice(0, 1);
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
        if(currentStudent.attendanceRecord[0].date == "" && currentStudent.attendanceRecord[0].status == ""){
          currentStudent.attendanceRecord.splice(0, 1);
        }
      return this.studentService.updateStudent(currentStudent._id, currentStudent);
    }

    // public takeAttendance(){
    //   let attendance = {date: this.currentDate, students: []};
    //   this.studentArray.sort(function(a, b){
    //     if(a.lastName < b.lastName) return -1;
    //     if(a.lastName > b.lastName) return 1;
    //     return 0;
    //   })
    //   let studentArray = this.studentArray;
    //   for(var student in studentArray){
    //     attendance.students.push(studentArray[student]);
    //   }
    //
    //   console.log(studentArray);
    //
    //   return this.studentService.createNewAttendanceSheet(attendance)
    //   .then(() => {
    //     console.log(attendance)
    //   })
    //   .catch((err) => {
    //     console.error(err)
    //   });
    // }
  }
}
