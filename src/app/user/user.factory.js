(function () {
  'use strict';

  angular.module('latido.user')
    .factory('userService', userService);

  /**
   * API calls of users
   * @ngInject
   * @param $log
   * @param $q
   * @returns {{getUsers: getUsers, getUser: getUser, save: save}}
     */
  function userService($log, $q) {
    var service = {
      getUsers: getUsers,
      getUser: getUser,
      save: save
    };

    var deferred = $q.defer();

    var users = [
      {
        "id": "c0f179c2-dd4b-4d68-9ca7-65a36a652b68",
        "username": "user1",
        "title": "Dr.",
        "firstname": "Chan",
        "lastname": "Xu"
      },
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
      },
      {
        "id": "4cbd85bd-bc1a-4801-80ff-097775e35494",
        "username": "user4",
        "title": "",
        "firstname": "Gustavo",
        "lastname": "Gustavson"
      }
    ];

    return service;

    /**
     * Get all users
     * @returns {Function}
       */
    function getUsers() {
      deferred.resolve(users);
      return deferred.promise;
    }

    /**
     * Get specific user
     * @param userId of the patient to query
     * @returns {Function}
       */
    function getUser(userId) {
      deferred.resolve(users.filter(function (user) {
        return user.id === userId;
      }));
      return deferred.promise;
    }

    function save() {
      //
      $log.info('User saved');
    }
  }
})();
