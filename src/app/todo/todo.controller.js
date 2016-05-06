(function () {
  'use strict';

  angular.module('latido.todo')
    .controller('TodoController', TodoController);

  /** @ngInject */
  function TodoController(taskService, $mdDialog, $document, userService, patientService, groupService, taskAutocompleteService, toolbarService) {
    var vm = this;

    toolbarService.title = 'TASKS';
    toolbarService.sidenav.label = 'Show Filters';
    toolbarService.sidenav.navID = 'todo-right';
    vm.openTaskDialogBox = openTaskDialogBox;
    vm.openGroupUsersDialogBox = openGroupUsersDialogBox;
    vm.users = null;
    vm.groups = null;
    vm.patients = null;
    vm.selectedUser = null;
    vm.selectedPatient = null;
    vm.userSearchText = null;
    vm.patientSearchText = null;
    vm.userSearch = userSearch;
    vm.patientSearch = patientSearch;
    vm.clearFilters = clearFilters;
    init();

    function init() {
      taskService.getTasks().then(function (tasks) {
        vm.tasks = tasks;
      }, function () {
        //error message
      });
      userService.getUsers().then(function (users) {
        vm.users = users;
      }, function () {
        //error message
      });
      patientService.getPatients().then(function (patients) {
        vm.patients = patients;
      }, function () {
        //error message
      });
      groupService.getGroups().then(function (groups) {
        vm.groups = groups;
      }, function () {
        //error message
      });
      clearFilters();
    }

    /**
     * Opens a dialog to create / edit a task
     * @param event starting point of the dialog opening animation
     * @param task to edit | empty if a new task should be created
       */
    function openTaskDialogBox(event, task) {
      $mdDialog.show({
        controller: 'TaskDialogController',
        controllerAs: 'vm',
        templateUrl: 'app/todo/dialogs/task-dialog.html',
        parent: angular.element($document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        locals: {
          task: task,
          tasks: vm.tasks,
          users: userService.getUsers(),
          patients: patientService.getPatients(),
          groups: groupService.getGroups(),
          userSearch: userSearch,
          patientSearch: patientSearch
        }
      }).then(function (result) {
        /**
         * Will be called after closing the task dialog successfully
         */
        saveTask(result.task, result.newTask);
      }, function () {
        //cancelled
      });
    }

    /**
     * Opens a dialog to see the members of the corresponding group
     * @param event starting point of the dialog opening animation
     * @param group to show the members
       */
    function openGroupUsersDialogBox(event, group) {
      if (group.users.length != 0) {
        $mdDialog.show({
          controller: 'GroupUsersController',
          controllerAs: 'vm',
          templateUrl: 'app/group/dialogs/group-users-dialog.html',
          parent: angular.element($document.body),
          targetEvent: event,
          clickOutsideToClose: true,
          locals: {
            group: group,
            event: event
          }
        });
      }
    }

    /**
     * Dummy save action
     * @param task to save
     * @param newTask true if a new task | false otherwise
       */
    function saveTask(task, newTask) {
      if (newTask) {
        vm.tasks.unshift(task);
      } else {
        for (var i = 0; i < vm.tasks.length; i++) {
          if (vm.tasks[i].id === task.id) {
            vm.tasks[i] = angular.copy(task);
            break;
          }
        }
      }
    }

    /**
     * Cleares all defined filters
     */
    function clearFilters() {
      vm.filter = {
        search: toolbarService,
        recipients: [],
        patients: [],
        priority: ''
      };
    }

    /*RIGHT SIDE NAV AND TASK-DIALOG (FILTERS)*/

    function userSearch(query) {
      var filteredUsers = taskAutocompleteService.search(vm.users, query);
      var filteredGroups = taskAutocompleteService.search(vm.groups, query, true);
      return filteredUsers.concat(filteredGroups);
    }

    function patientSearch(query) {
      return taskAutocompleteService.search(vm.patients, query);
    }

    /*RIGHT SIDE NAV AND TASK-DIALOG (FILTERS)*/
  }
})();
