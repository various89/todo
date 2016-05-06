(function () {
  'use strict';

  angular
    .module('latido')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, RestangularProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Set restangular properties
    RestangularProvider.setBaseUrl('https://api.myjson.com/bins');

    //Set angular material theming
    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('green')
  }

})();
