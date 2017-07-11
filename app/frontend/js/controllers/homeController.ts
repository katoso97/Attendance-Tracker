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
      this.currentDate = new Date();
      this.year = this.currentDate.getFullYear();
      this.month = this.currentDate.getMonth();
      this.month = this.months[this.month];
      this.day = this.currentDate.getDate();
      this.currentDate = `${this.year} ${this.month}, ${this.day}`;
      this.student = {lastName: "", firstName: "", isPresent:""}
    }
    
    public isPresent(student){
    let currentStudent = {firstName: "", lastName: "", date: "", isPresent: ""};
    currentStudent.firstName = student.firstName;
    currentStudent.lastName = student.lastName;
    currentStudent.date = this.currentDate;
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
    let currentStudent = {firstName: "", lastName: "", date: "", isPresent: ""};
    currentStudent.firstName = student.firstName;
    currentStudent.lastName = student.lastName;
    currentStudent.date = this.currentDate;
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
      let attendance = {students: []};
      let studentArray = this.studentArray;
      for(var student in studentArray){
        attendance.students.push(studentArray[student]);
      }
      JSON.stringify(attendance);
      return this.studentService.addAttendance(attendance);
    }
}
}
