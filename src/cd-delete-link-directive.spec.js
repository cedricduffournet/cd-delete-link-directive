/* global  describe, it, beforeEach, expect, inject */
'use strict';

describe('Directive : cd.ui.deleteLink', function () {

  var el, scope;

  beforeEach(module('cd.ui.deleteLink'));

  beforeEach(inject(function ($rootScope, $compile) {


    var template = '<div><cd-delete-link ' +
      'action="deleteAction" ' +
      'action-data-return="{index:1}" ' +
      'content="Are you sure ?" ' +
      'label-btn-action="Delete" ' +
      'label-btn-cancel="Cancel" ' +
      'title-popover="Deletion" ' +
      'title-popover="Deletion" ' +
      'title-tooltip="Deletion" ' +
      '>' +
      '</cd-delete-link></div>';


    el = angular.element(template);


    scope = $rootScope;
    $compile(el)($rootScope);
    scope.$digest();
  }));


  it('should attach button to the page', function () {
    expect(el.length).toBe(1);
  });



});