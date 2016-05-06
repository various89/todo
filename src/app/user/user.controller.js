(function () {
  angular
    .module('latido.user')
    .controller('UserController', UserController);

  /** @ngInject */
  function UserController(userService) {
    var vm = this;

    vm.queryUsers = queryUsers;
    vm.saveUser = saveUser;

    init();

    function init() {
      queryUsers();
    }

    function queryUsers() {
      return userService.getUsers().then(function (users) {
        vm.users = users;
      }, function () {
        //error message
      });
    }

    function saveUser() {
      //
    }

  }


})();
