namespace attendancetracker.Services {
  export class UserService{
    public USER_RESOURCE = this.$resource('/api/users/:id', null, {
      'update': { method: 'PUT' }
    });

    static $inject = ['$resource', '$window'];

    constructor(private $resource, private $window) {}
    public registerUser(newUser){
      return this.USER_RESOURCE.save(newUser).$promise;
    }
    public getUser(username) {
      return this.USER_RESOURCE.get({_username: username});
    }
    public deleteUser(username) {
      return this.USER_RESOURCE.remove({_username: username}).$promise;
    }
    public editUser(username) {
      return this.USER_RESOURCE.put({_username: username}).$promise;
    }

    public isUserLoggedIn() {
      return this.$window.localStorage.satellizer_token;
    }
    public logout() {
      return this.$window.localStorage.clear();
    }

  }
  angular.module('attendancetracker').service('userService', UserService);
}
