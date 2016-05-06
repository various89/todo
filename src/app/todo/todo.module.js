(function () {
  'use strict';

  angular
    .module('latido.todo', ['latido.user', 'latido.patient'])
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    $stateProvider
      .state('latido.todo', {
        url: 'todo',
        views: {
          'toolbar': {
            templateUrl: 'app/components/toolbar/toolbar.html',
            controller: 'ToolbarController as vm'
          },
          'content': {
            templateUrl: 'app/todo/todo.html',
            controller: 'TodoController as vm'
          }
        }
      });
  }
})();
