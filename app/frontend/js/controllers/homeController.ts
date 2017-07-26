namespace attendancetracker.Controllers {

  export class HomeController {
    public clickedStudent;
    public student;
    public students;
    public currentDate;
    public year;
    public month;
    public day;
    public studentArray = [];
    public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    static $inject = ['studentService', '$state', '$stateParams'];

    constructor(private studentService, private $state, private $stateParams){
      this.students = this.studentService.getAllStudents();
      this.currentDate = this.studentService.currentDate;
      this.student = {lastName: "", firstName: "", isPresent:""}
    }

    public isPresent(student){
    let currentStudent = {firstName: "", lastName: "",isPresent: ""};
    currentStudent.firstName = student.firstName;
    currentStudent.lastName = student.lastName;
    currentStudent.isPresent = "present";
    for(let i = 0; i < this.studentArray.length; i++){
      if(currentStudent.firstName == this.studentArray[i].firstName && currentStudent.lastName == this.studentArray[i].lastName){
        this.studentArray.splice(i,1);
      }
    }
    this.studentArray.push(currentStudent);
    console.dir(this.studentArray);
    }

    public isAbsent(student){
    let currentStudent = {firstName: "", lastName: "", isPresent: ""};
    currentStudent.firstName = student.firstName;
    currentStudent.lastName = student.lastName;
    currentStudent.isPresent = "absent";
    for(let i = 0; i < this.studentArray.length; i++){
      if(currentStudent.firstName == this.studentArray[i].firstName && currentStudent.lastName == this.studentArray[i].lastName){
        this.studentArray.splice(i,1);
      }
    }
    this.studentArray.push(currentStudent);
    console.dir(this.studentArray);
    }

    public saveAttendance(){
      let attendance = {date: this.currentDate, students: []};
      let studentArray = this.studentArray;
      for(var student in studentArray){
        attendance.students.push(studentArray[student]);
      }
      console.log(studentArray);

      return this.studentService.createNewAttendanceSheet(attendance)
      .then(() => {
        console.log(attendance)
      })
      .catch((err) => {
        console.error(err)
      });
    }
}
}
