(function () {
  'use strict';

  angular
    .module('latido')
    .controller('ToolbarController', ToolbarController);

  /**
   * 
   * @ngInject
   * @param toolbarService for object exchange between different controllers
   * @param navigationService provides methods to toggle a sideNav (menu)
   * @constructor
     */
  function ToolbarController(toolbarService, navigationService) {
    var vm = this;
    vm.toolbar = toolbarService;
    vm.toggleSidenav = navigationService.toggleNavigation(vm.toolbar.sidenav);
    vm.showSearch = false;
  }
})();
