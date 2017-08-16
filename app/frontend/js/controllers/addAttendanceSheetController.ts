namespace attendancetracker.Controllers{
  export class AddAttendanceSheetController{
    public attendanceSheet;
    public date;


    static $inject = ['studentService', '$state', '$stateParams'];

    constructor(private studentService, private $state, private $stateParams){
      this.attendanceSheet = {
        date: '',
        students: [
          {name:'', presentStatus:'', phoneNumber:''}
        ],
      }
    }
    public createNewAttendanceSheet(){
      let newAttendanceSheet = this.attendanceSheet;
      newAttendanceSheet.date = this.date;
    }

  }

}
