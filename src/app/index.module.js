(function () {
  'use strict';

  angular
    .module('latido', [
      'ngAnimate',
      'ngCookies',
      'ngSanitize',
      'ngMessages',
      'ngAria',
      'restangular',
      'ui.router',
      'ngMaterial',
      'toastr',
      'uuid',
      'latido.todo',
      'latido.user',
      'latido.patient',
      'latido.group'
    ]);

})();
