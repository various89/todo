(function () {
  'use strict';

  angular
    .module('latido.todo')
    .controller('TaskDialogController', TaskDialogController);

  /**
   * Dialog to create or modify a task
   * @ngInject
   * @param $mdDialog
   * @param task
   * @param users
   * @param patients
   * @param groups
   * @param userSearch
   * @param patientSearch
   * @param uuid4
   * @param $mdMedia
   * @constructor
   */
  function TaskDialogController($mdDialog, task, users, patients, groups, userSearch, patientSearch, uuid4, $mdMedia) {
    var vm = this;

    vm.task = angular.copy(task);
    vm.selectedUser = null;
    vm.selectedPatient = null;
    vm.userSearchText = null;
    vm.patientSearchText = null;
    vm.users = getUsers;
    vm.patients = getPatients;
    vm.groups = getGroups;
    vm.userSearch = userSearch;
    vm.patientSearch = patientSearch;
    vm.groupUsers = null;
    vm.smallScreen = $mdMedia('xs');

    vm.saveTask = saveTask;
    vm.cancelTask = cancelTask;

    //new task
    if (!vm.task) {
      vm.task = {
        'id': uuid4.generate(),
        'shorttext': '',
        'longtext': '',
        'recipients': [],
        'patients': [],
        'done': false,
        'priority': false
      };
      vm.title = 'New Task';
      vm.new = true;
    } else {
      vm.title = 'Edit Task';
      vm.new = false;
    }

    function saveTask() {
      return closeDialog();
    }

    function cancelTask() {
      return cancelDialog();
    }

    function closeDialog() {
      $mdDialog.hide({task: vm.task, newTask: vm.new});
    }

    function cancelDialog() {
      $mdDialog.cancel();
    }

    function getUsers() {
      return users.then(function (users) {
        return users;
      }, function () {
        //failure
      })
    }

    function getPatients() {
      return patients.then(function (patients) {
        return patients;
      }, function () {
        //failure
      });
    }

    function getGroups() {
      return groups.then(function (groups) {
        return groups;
      }, function () {
        //failure
      });
    }
  }
})();
