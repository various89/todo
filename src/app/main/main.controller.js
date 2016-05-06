(function () {
  'use strict';

  angular
    .module('latido')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(navigationService) {
    var vm = this;
    vm.toggleLeft = navigationService.toggleNavigation('left');
  }
})();
