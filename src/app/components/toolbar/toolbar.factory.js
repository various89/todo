(function () {
  'use strict';

  angular
    .module('latido')
    .factory('toolbarService', toolbarService);

  /**
   * Exchanges objects between different controllers, so they are able to communicate
   * @ngInject
   * @returns {{title: null, searchText: string, sidenav: {navID: string, label: string}}}
     */
  function toolbarService() {
    var service = {
      title: null,
      searchText: '',
      sidenav: {
        navID : '',
        label : ''
      }
    };
    return service;
  }
})();
