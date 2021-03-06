namespace attendancetracker {

  angular.module('attendancetracker', ['ui.router', 'ngResource', 'ui.bootstrap', 'ngOnload']).config((
      $stateProvider,
      $urlRouterProvider,
      $locationProvider,
    ) => {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/views/home.html',
                controller: attendancetracker.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('addStudents', {
              url: '/addStudents',
              templateUrl: '/views/addStudents.html',
              controller: attendancetracker.Controllers.AddStudentsController,
              controllerAs: 'controller'
            })
            .state('attendance', {
              url: '/attendance',
              templateUrl: '/views/attendance.html',
              controller: attendancetracker.Controllers.AttendanceController,
              controllerAs: 'controller'
            })
            // .state('addAttendanceSheet', {
            //   url: '/addAttendanceSheet',
            //   templateUrl: '/views/addAttendanceSheet.html',
            //   controller: attendancetracker.Controllers.AddAttendanceSheetController,
            //   controllerAs: 'controller'
            // })
            .state('editStudent', {
              url: '/editStudent/:id',
              templateUrl: '/views/editStudent.html',
              controller: attendancetracker.Controllers.EditController,
              controllerAs: 'controller'
            })
            .state('studentView', {
              url: '/studentView/:id',
              templateUrl: '/views/studentAttendanceRecord.html',
              controller: attendancetracker.Controllers.AttendanceRecordController,
              controllerAs: 'controller'
            })
            .state('takeAttendance', {
              url: '/takeAttendance',
              templateUrl: '/views/takeAttendance.html',
              controller: attendancetracker.Controllers.TakeAttendanceController,
              controllerAs: 'controller'
            })
            // .state('register', {
            //     url: '/register',
            //     templateUrl: '/views/register.html',
            //     controller: attendancetracker.Controllers.RegisterController,
            //     controllerAs: 'controller'
            // })
            // .state('login', {
            //     url: '/login',
            //     templateUrl: '/views/login.html',
            //     controller: attendancetracker.Controllers.LoginController,
            //     controllerAs: 'controller'
            // })
            // .state('about', {
            //     url: '/about',
            //     templateUrl: '/views/about.html',
            //     controller: attendancetracker.Controllers.AboutController,
            //     controllerAs: 'controller'
            // })
            // .state('documentation', {
            //     url: '/documentation',
            //     templateUrl: '/views/documentation.html',
            // })
            // .state('dashboard', {
            //     url: '/dashboard',
            //     templateUrl: '/views/dashboard.html',
            //     controller: attendancetracker.Controllers.DashboardController,
            //     controllerAs: 'controller'
            // })
            // .state('demo', {
            //     url: '/demo',
            //     templateUrl: '/views/demo.html',
            //     controller: attendancetracker.Controllers.GetAllStudentsController,
            //     controllerAs: 'controller'
            // })
            .state('404', {
                url: '/404',
                templateUrl: '/views/404.html'
            });

        $urlRouterProvider.otherwise('/404');

        $locationProvider.html5Mode(true);
    });

}
