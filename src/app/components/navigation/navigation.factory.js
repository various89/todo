(function () {
  'use strict';

  angular
    .module('latido')
    .factory('navigationService', navigationService);

  /**
   * Service which opens/close a sideNav (menu)
   * @ngInject
   * @param $mdSidenav
   * @returns {{toggleNavigation: toggleNavigation}}
     */
  function navigationService($mdSidenav) {
    var service = {
      toggleNavigation: toggleNavigation
    };
    return service;

    /**
     * Toggles a sideNav with a given navID
     * @param navID of the menu to open/close
     * @returns {Function}
       */
    function toggleNavigation(navID) {
      return function () {
        $mdSidenav(angular.isString(navID) ? navID : navID.navID)
          .toggle();
      };
    }
  }
})();
