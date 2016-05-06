'use strict';

var Toolbar = function () {
  this.title = element(by.binding('vm.toolbar.title'));
  this.searchButton = element(by.css('.search-button'));
  this.searchText = element(by.model('vm.toolbar.searchText'));
  this.rightSideNavButtonClosedSearch = element(by.id('toolbar')).element(by.css('.right-sidenav-button'));
  this.rightSideNavButtonOpenedSearch = element(by.id('toolbar-search')).element(by.css('.right-sidenav-button'));
};

module.exports = new Toolbar();
