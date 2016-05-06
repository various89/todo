(function () {
  'use strict';

  angular.module('latido.todo')
    .factory('taskAutocompleteService', taskAutocompleteService);

  /**
   * Service to browse the autocomplete input fields
   * @ngInject
   * @returns {{search: search}}
   */
  function taskAutocompleteService() {
    var service = {
      search: search
    };

    return service;

    function toLowercase(string) {
      return angular.lowercase(string);
    }

    /**
     * Browses the given items, by applying a filter {@link taskAutocompleteService#createFilterFor} according to the query
     * @param items to filter
     * @param query to filter the items
     * @param group true is a group {@link taskAutocompleteService#createFilterForGroup} will be used | false not a group {@link taskAutocompleteService#createFilterFor} will be used
     * @returns {Array}
     */
    function search(items, query, group) {
      var lowercaseQuery = toLowercase(query);
      if (group) {
        return query ? items.filter(createFilterForGroup(lowercaseQuery)) : [];
      }
      return query ? items.filter(createFilterFor(lowercaseQuery)) : [];
    }


    function createFilterForGroup(query) {
      return function filterFn(item) {
        return toLowercase(item.name).indexOf(query) === 0;
      };
    }

    function createFilterFor(query) {
      return function filterFn(item) {
        return (toLowercase(item.firstname).indexOf(query) === 0) ||
          (toLowercase(item.lastname).indexOf(query) === 0);
      };
    }
  }
})();
