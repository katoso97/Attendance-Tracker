namespace attendancetracker.Controllers {

  export class HomeController {
    public clickedStudent;
    public student;
    public students;;
    public currentDate;
    public year;
    public month;
    public day;
    public studentArray = [];
    public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    static $inject = ['studentService', '$state', '$stateParams', '$window'];

    constructor(private studentService, private $state, private $stateParams, private $window){
      this.studentService.getAllStudents().then((data) => {
        this.students = data;
        console.log(this.students)
      }).then(() => {
        this.students.sort(function(a, b){
          if(a.lastName < b.lastName) return -1;
          if(a.lastName > b.lastName) return 1;
          return 0;
        })
        console.log(this.students);
      })

      //sorts alphabetically
      // this.students = this.students.sort(this.compare);
        // console.log(this.students);


      this.currentDate = this.studentService.currentDate;
      this.student = {lastName: "", firstName: "", isPresent:""}
      // console.log(this.students);
      // console.log(this.students.f);
      // setTimeout(function(){
      //   console.log(this.controller)
      // }, 1000)
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
    public sortArray(a, b){
      if(a.lastName < b.lastName) return -1;
      if(a.lastName > b.lastName) return 1;
      return 0;
    }
  }
}
