'use strict';

/** @constructor */
var TodoPage = function () {
  this.createTaskButton = element(by.id('create-task-button'));
  this.todoDialog = element(by.id('todo-dialog'));
  this.tasks = element.all(by.repeater('task in vm.tasks'));
  this.tasks.checkboxes = element.all(by.model('task.done'));

  this.task = {};
  this.task.shorttext = element(by.model('vm.task.shorttext'));
  this.task.longtext = element(by.model('vm.task.longtext'));

  this.task.recipients = element(by.model('vm.task.recipients')).all(by.repeater('$chip in $mdChipsCtrl.items'));
  this.task.patients = element(by.model('vm.task.patients')).all(by.repeater('$chip in $mdChipsCtrl.items'));

  this.task.recipientsInput = element(by.name('recipientsAutocomplete'));
  this.task.recipientsFilterInput = element(by.name('recipientsFilterAutocomplete'));

  this.highlightedUser = element(by.css('.highlighted-user'));
  this.highlightedGroup = element(by.css('.highlighted-group'));

  this.task.patientsInput = element(by.name('patientsAutocomplete'));
  this.task.patientsFilterInput = element(by.name('patientsFilterAutocomplete'));
  this.highlightedPatient = element(by.css('.highlighted-patient'));

  this.groupMembers = element(by.css('.group-member-list'));
  this.groupUserDialog = element(by.id('groupUserDialog'));
  this.task.priority = element(by.model('vm.task.priority'));

  this.task.save = element(by.css('.save-task-button'));

  this.filter = {};
  this.filter.recipients = element(by.model('vm.filter.recipients')).all(by.repeater('$chip in $mdChipsCtrl.items'));


};

module.exports = new TodoPage();
