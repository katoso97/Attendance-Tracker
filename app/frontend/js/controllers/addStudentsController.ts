namespace attendancetracker.Controllers{
  export class AddStudentsController{
      public newStudent;

      static $inject = ['studentService', '$state', '$stateParams'];

      constructor(private studentService, private $state, private $stateParams){

      }
      public addStudent(){
      let newStudent = {firstName: "", lastName: "", school: "", age:"", gradeLevel:"", parent:"", parentPhoneNumber:"", address:"", attendInteract:""};
      newStudent.firstName = this.newStudent.firstName;
      newStudent.lastName = this.newStudent.lastName;
      newStudent.school = this.newStudent.school;
      newStudent.age = this.newStudent.age;
      newStudent.gradeLevel = this.newStudent.gradeLevel;
      newStudent.parent = this.newStudent.parent;
      newStudent.parentPhoneNumber = this.newStudent.parentPhoneNumber;
      newStudent.address = this.newStudent.address;
      return this.studentService.addStudent(newStudent)
      .then(() => console.log("added " + newStudent.firstName + " to the class!"))
      .catch((err) => console.error(err));
    }
  }
}
