'use strict';

describe('The Todo view', function () {
  var page, toolbar;

  beforeEach(function () {
    browser.get('#/todo');
    page = require('./todo.po');
    toolbar = require('./toolbar.po');
  });

  it('should show the correct title on toolbar', function () {
    expect(toolbar.title.getText()).toBe('TASKS');
  });

  it('should create a new task', function () {
    page.createTaskButton.click();
    expect(page.todoDialog.isPresent()).toBeTruthy();
    page.task.shorttext.sendKeys('New Task');
    page.task.longtext.sendKeys('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium eu tellus eu cursus. Nulla dapibus tellus libero, vel rhoncus orci dapibus nec. Nunc id mi lobortis, iaculis orci at, tincidunt ante. Cras ornare hendrerit nibh, vel finibus nunc feugiat ut.');

    page.task.recipientsInput.sendKeys('Steve');
    page.highlightedUser.click();

    page.task.recipientsInput.sendKeys('group1');
    page.highlightedGroup.click();

    expect(page.task.recipients.count()).toBe(2);

    page.task.patientsInput.sendKeys('Siegfried');
    page.highlightedPatient.click();

    expect(page.task.patients.count()).toBe(1);

    page.task.priority.click();

    page.task.save.click();

    expect(page.todoDialog.isPresent()).toBe(false);

    page.tasks.first().evaluate('task.shorttext').then(function (shorttext) {
      expect(shorttext).toBe('New Task');
    });
  });

  it('should finish an open Task', function () {
    expect(page.tasks.count()).toBeGreaterThan(0);

    var firstTask = page.tasks.checkboxes.first();

    firstTask.click();

    expect(firstTask.evaluate('task.done')).toBeTruthy();
  });

  it('should edit an existing task', function () {
    expect(page.tasks.count()).toBeGreaterThan(0);

    page.tasks.first().click();

    expect(page.todoDialog.isPresent()).toBeTruthy();

    page.task.shorttext.clear();
    page.task.shorttext.sendKeys('Edited Task');

    page.task.longtext.clear();
    page.task.longtext.sendKeys('Edited Longtext');

    page.task.recipientsInput.sendKeys('Xu');
    page.highlightedUser.click();

    page.task.recipientsInput.sendKeys('Steve');
    page.highlightedUser.click();

    expect(page.task.recipients.count()).toBe(2);
    expect(page.task.patients.count()).toBe(0);

    page.task.save.click();

    expect(page.todoDialog.isPresent()).toBeFalsy();

    var firstTask = page.tasks.first();

    firstTask.evaluate('task.shorttext').then(function (shorttext) {
      expect(shorttext).toBe('Edited Task');
    });

    firstTask.evaluate('task.longtext').then(function (longtext) {
      expect(longtext).toBe('Edited Longtext');
    });
  });

  it('should search for a specific task by shorttext', function () {
    var expectedShortText = 'Brunch this morning?';
    expect(page.tasks.count()).toBeGreaterThan(0);

    toolbar.searchButton.click();

    toolbar.searchText.sendKeys(expectedShortText);

    page.tasks.first().evaluate('task.shorttext').then(function (shorttext) {
      expect(shorttext).toBe(expectedShortText);
    })
  });

  it('should add a recipient to a task and filter tasks by a recipient', function () {
    var recipient = 'Xu';
    expect(page.tasks.count()).toBeGreaterThan(0);

    page.tasks.first().click();
    expect(page.todoDialog.isPresent()).toBeTruthy();

    page.task.recipientsInput.sendKeys(recipient);
    page.highlightedUser.click();

    expect(page.task.recipients.count()).toBe(1);
    expect(page.task.patients.count()).toBe(0);

    page.task.save.click();
    expect(page.todoDialog.isPresent()).toBeFalsy();

    toolbar.rightSideNavButtonClosedSearch.click();

    page.task.recipientsFilterInput.sendKeys(recipient);
    page.highlightedUser.click();

    toolbar.rightSideNavButtonClosedSearch.click();

    expect(page.tasks.count()).toBe(1);
  });

  it('should add a patient to a task and filter tasks by a patient', function () {
    var patient = 'Siegfried';
    expect(page.tasks.count()).toBeGreaterThan(0);

    page.tasks.first().click();
    expect(page.todoDialog.isPresent()).toBeTruthy();

    page.task.patientsInput.sendKeys(patient);
    page.highlightedPatient.click();

    expect(page.task.recipients.count()).toBe(0);
    expect(page.task.patients.count()).toBe(1);

    page.task.save.click();
    expect(page.todoDialog.isPresent()).toBeFalsy();

    toolbar.rightSideNavButtonClosedSearch.click();

    page.task.patientsFilterInput.sendKeys(patient);
    page.highlightedPatient.click();

    toolbar.rightSideNavButtonClosedSearch.click();

    expect(page.tasks.count()).toBe(1);
  });

  it('should add a group to a task and show the members of the group', function () {
    var group = 'group1';
    expect(page.tasks.count()).toBeGreaterThan(0);

    page.tasks.first().click();
    expect(page.todoDialog.isPresent()).toBeTruthy();

    page.task.recipientsInput.sendKeys(group);
    page.highlightedGroup.click();

    page.task.recipients.first().click();
    expect(page.groupMembers.isPresent()).toBeTruthy();
  });

  it('should add a group to a task, filter for that group and show the members', function () {
    var group = 'group1';
    expect(page.tasks.count()).toBeGreaterThan(0);

    page.tasks.first().click();
    expect(page.todoDialog.isPresent()).toBeTruthy();

    page.task.recipientsInput.sendKeys(group);
    page.highlightedGroup.click();

    expect(page.task.recipients.count()).toBe(1);
    expect(page.task.patients.count()).toBe(0);

    page.task.save.click();
    expect(page.todoDialog.isPresent()).toBeFalsy();

    toolbar.rightSideNavButtonClosedSearch.click();
    page.task.recipientsFilterInput.sendKeys(group);
    page.highlightedGroup.click();

    page.filter.recipients.first().click();
    expect(page.groupUserDialog.isPresent()).toBeTruthy();
  })
});
