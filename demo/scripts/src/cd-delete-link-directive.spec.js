/* global  describe, it, beforeEach, expect, inject */
'use strict';

describe('Directive : cd.ui.deleteLink', function () {

  var element, scope,body;

  beforeEach(module('cd.ui.deleteLink'));

  beforeEach(inject(function ($rootScope, $compile) {

    var body = angular.element(document.querySelector( 'body' ));


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

    //console.log(sandboxEl.html());
    var sandboxEl = body.append(angular.element(template));

    scope = $rootScope;
    element = $compile(sandboxEl)($rootScope);
    scope.$digest();
  }));


  it('should attach button to the page', function () {

    console.log(element.children().length);
    //var button = element.find('button');
    //console.log(element.html());
    //expect(button.length).toBe(1);
  });

  it('should display popover on click', function () {
    



  });

});