(function () {
  'use strict';

  angular.module('latido.todo')
    .factory('taskService', taskService);

  /**
   * API calls of tasks
   * @ngInject
   * @param $log
   * @param $q
   * @returns {{getTasks: getTasks, getTask: getTask, save: save}}
     */
  function taskService($log, $q) {
    var service = {
      getTasks: getTasks,
      getTask: getTask,
      save: save
    };

    var deferred = $q.defer();

    var tasks = [
      {
        "id": "2129aae0-0e20-11e6-93ff-0002a5d5c51b",
        "shorttext": "Brunch this weekend?",
        "longtext": " I'll be in your neighborhood doing errands",
        "recipients": [],
        'patients': [],
        "done": true,
        "priority": false
      },
      {
        "id": "2f8a1660-0e20-11e6-9563-0002a5d5c51b",
        "shorttext": "Brunch this morning?",
        "longtext": " I'll be in your neighborhood doing errands",
        "recipients": [],
        'patients': [],
        "done": false,
        "priority": true
      },
      {
        "id": "367bbc80-0e20-11e6-8fd4-0002a5d5c51b",
        "shorttext": "Brunch this afternoon?",
        "longtext": " I'll be in your neighborhood doing errands",
        "recipients": [],
        'patients': [],
        "done": true,
        "priority": false
      }
    ];

    return service;

    /**
     * Get all tasks
     * @returns {Function}
       */
    function getTasks() {
      deferred.resolve(tasks);
      return deferred.promise;
    }

    /**
     * Get specific task
     * @param taskId of the task to query
     * @returns {Function}
       */
    function getTask(taskId) {
      deferred.resolve(tasks.filter(function (task) {
        return task.id === taskId;
      }));
      return deferred.promise;
    }

    function save() {
      //
      $log.info('Task saved');
    }
  }
})();
