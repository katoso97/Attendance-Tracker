namespace attendancetracker.Services {

  export class StudentService {
    private STUDENT_RESOURCE = this.$resource('/api/students/:id', null, {
      'update': { method: 'PUT' }
    });
    private ATTENDANCE_RESOURCE = this.$resource('/api/attendanceRecords/:id', null, {
      'update': { method: 'PUT'}
    });

    static $inject = ['$resource'];

    constructor(private $resource) {}

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
    public addAttendance(studentArray){
      return this.ATTENDANCE_RESOURCE.save(studentArray).$promise;
    }
  }

  angular.module('attendancetracker').service('studentService', StudentService);

}
