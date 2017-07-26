namespace attendancetracker.Services {

  export class StudentService {
    private STUDENT_RESOURCE = this.$resource('/api/students/:id', null, {
      'update': { method: 'PUT' }
    });
    private ATTENDANCE_RESOURCE = this.$resource('/api/attendanceRecords/:id', null, {
      'update': { method: 'PUT'}
    });
    public currentDate;
    public year;
    public month;
    public day;
    public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    static $inject = ['$resource'];

    constructor(private $resource) {
      this.currentDate = new Date();
      this.year = this.currentDate.getFullYear();
      this.month = this.currentDate.getMonth();
      this.month = this.months[this.month];
      this.day = this.currentDate.getDate();
      this.currentDate = `${this.year} ${this.month}, ${this.day}`;
    }

    public getAllStudents() {
      return this.STUDENT_RESOURCE.query();
    }

    public getStudentById(id) {
      return this.STUDENT_RESOURCE.get({id: id});
    }

    public addStudent(student) {
      return this.STUDENT_RESOURCE.save(student).$promise;
    }

    public updateStudent(id, student) {
      return this.STUDENT_RESOURCE.update({id: id}, student).$promise;
    }

    public deleteStudent(id) {
      return this.STUDENT_RESOURCE.delete({id: id}).$promise;
    }

    public createNewAttendanceSheet(attendanceSheet){
      return this.ATTENDANCE_RESOURCE.save(attendanceSheet).$promise;
    }
  }

  angular.module('attendancetracker').service('studentService', StudentService);

}
