(function () {
  'use strict';

  angular
    .module('latido.todo')
    .filter('todoFilter', todoFilter);

  function todoFilter() {
    return filter;
    /**
     * Filters the given items according to the specified query and returns the filtered items
     * @param items to filter
     * @param filterItems to filter e.g. recipients or patients
     * @param query applied to the filter
     * @returns {*}
     */
    function filter(items, filterItems, query) {
      if (items.length === 0 || filterItems.length === 0) {
        return items;
      }

      var filtered = [];

      items.forEach(function (item) {
        var match = filterItems.every(function (filterItem) {
          var exists = false;

          item[query].forEach(function (candidateItem) {
            if (candidateItem.id === filterItem.id) {
              return exists = true;
            }
          });
          return exists;
        });

        if (match) {
          filtered.push(item);
        }
      });
      return filtered;
    }
  }
})();
