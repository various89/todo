(function () {
  angular
    .module('latido.group')
    .controller('GroupController', GroupController);

  /** @ngInject */
  function GroupController(groupService) {
    var vm = this;

    vm.queryGroups = queryGroups;
    vm.saveGroup = saveGroup;

    init();

    function init() {
      queryGroups();
    }

    function queryGroups() {
      return groupService.getGroups().then(function (groups) {
        vm.groups = groups;
      }, function () {
        //error message
      });
    }

    function saveGroup() {
      //
    }

  }


})();
