namespace attendancetracker.Controllers{
  export class AddStudentsController{
      public newStudent;

      static $inject = ['studentService', '$state', '$stateParams'];

      constructor(private studentService, private $state, private $stateParams){

      }
      public addStudent(){
      let newStudent = {firstName: "", lastName: "", school: "", birthday:"", gradeLevel:"", parent:"", parentPhoneNumber:"", studentPhoneNumber: '', address:"", classTime:"", attendInteract:"", daysPresent: [], daysAbsent: []};
      newStudent.firstName = this.newStudent.firstName;
      newStudent.lastName = this.newStudent.lastName;
      newStudent.school = this.newStudent.school;
      newStudent.birthday = this.newStudent.birthday;
      newStudent.gradeLevel = this.newStudent.gradeLevel;
      newStudent.parent = this.newStudent.parent;
      newStudent.parentPhoneNumber = this.newStudent.parentPhoneNumber;
      newStudent.studentPhoneNumber = this.newStudent.studentPhoneNumber;
      newStudent.address = this.newStudent.address;
      newStudent.classTime = this.newStudent.classTime.toUpperCase();
      // newStudent.attendInteract = this.newStudent.attendInteract;
      return this.studentService.addStudent(newStudent)
      .then(() => console.log("added " + newStudent.firstName + " to the class!"))
      .catch((err) => console.error(err));
    }
  }
}
