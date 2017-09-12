namespace attendancetracker.Controllers{
  export class EditController{
    public studentId;
    public student;
    public updatedStudent;

    static $inject = ['studentService', '$stateParams', '$state', '$window'];

    constructor(private studentService, private $stateParams, private $state, private $window){
      this.studentId = this.$window.localStorage.studentId;
      this.student = this.studentService.studentBeingEdited;
      console.log(this.$window.localStorage.studentId);
      console.log(this.student);
    }
    public updateStudent(){
      let updatedStudent = {firstName: "", lastName: "", school: "", birthday:"", gradeLevel:"", parent:"", parentPhoneNumber:"", studentPhoneNumber: '', address:"", classTime:"", attendInteract:""};
      updatedStudent.firstName = this.student.firstName;
      updatedStudent.lastName = this.student.lastName;
      updatedStudent.school = this.student.school;
      updatedStudent.birthday = this.student.birthday;
      updatedStudent.gradeLevel = this.student.gradeLevel;
      updatedStudent.parent = this.student.parent;
      updatedStudent.parentPhoneNumber = this.student.parentPhoneNumber;
      updatedStudent.studentPhoneNumber = this.student.studentPhoneNumber;
      updatedStudent.address = this.student.address;
      updatedStudent.classTime = this.student.classTime.toUpperCase();
      return this.studentService.updateStudent(this.student._id, updatedStudent)
      .then(() => {
        this.$state.go('attendance');
      })
    }
  }
}
