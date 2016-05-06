(function () {
  'use strict';

  angular.module('latido.group')
    .factory('groupService', groupService);

  /**
   * API calls of groups
   * @ngInject
   * @param $log
   * @param $q
   * @returns {{getGroups: getGroups, getGroup: getGroup, save: save}}
   */
  function groupService($log, $q) {
    var service = {
      getGroups: getGroups,
      getGroup: getGroup,
      save: save
    };

    var deferred = $q.defer();

    var groups = [
      {
        "id": "9a83bb6c-6576-456c-95df-3db8cdd5ec0c",
        "name": "group1",
        "users": [
          {
            "id": "de547cf6-0ef5-48ee-b319-d90a49058b04",
            "username": "user2",
            "title": "",
            "firstname": "Steve",
            "lastname": "Last"
          },
          {
            "id": "b10c8331-63e6-4c5f-8f09-2fccd04b8cea",
            "username": "user3",
            "title": "",
            "firstname": "Bruno",
            "lastname": "Ipsum"
          }
        ]
      },
      {
        "id": "0b46f3d5-ca23-41e2-b682-9e38cf514ffb",
        "name": "group2",
        "users": []
      },
      {
        "id": "81934156-cc91-4fe8-9f98-30472ebfec73",
        "name": "group3",
        "users": []
      },
      {
        "id": "3545bc2d-dcf7-462c-add0-4a6630c964e4",
        "name": "group4",
        "users": []
      }
    ];

    return service;

    /**
     * Get all groups
     * @returns {Function}
     */
    function getGroups() {
      deferred.resolve(groups);
      return deferred.promise;
    }

    /**
     * Get specific group
     * @param groupId of the group to query
     * @returns {Function}
       */
    function getGroup(groupId) {
      deferred.resolve(groups.filter(function (group) {
        return group.id === groupId;
      }));
      return deferred.promise;
    }

    function save() {
      //
      $log.info('Group saved');
    }
  }
})();
