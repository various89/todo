(function () {
  'use strict';

  angular
    .module('latido.group')
    .controller('GroupUsersController', GroupUsersController);

  /** @ngInject */
  function GroupUsersController($mdDialog, group) {
    var vm = this;
    vm.cancel = cancel;
    vm.group = group;

    function cancel() {
      $mdDialog.hide();
    }
  }
})();
