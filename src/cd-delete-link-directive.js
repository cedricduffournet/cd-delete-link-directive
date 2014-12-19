(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name cd.ui.deleteLink:cdDeleteLink
   * @restrict E
   *
   * @description
   * Create en link with a angular-strap popover and angular-strap tooltip
   * Based on angular-strap
   *
   * @param {String=} action Event name to emit on action click
   * @param {Object=} actionDataReturn data to return on action click
   * @param {String=} animation apply a CSS animation powered by ngAnimate
   * @param {String=} content angular-strap popover content
   * @param {String=} labelBtnAction label for action button
   * @param {String=} labelBtnCancel label for cancel button
   * @param {String=} titlePopover angular-strap popover title
   * @param {String=} titleTooltip angular-strap tooltip title
   *
   * @toDo
   * Write test
   */
  angular
    .module('cd.ui.deleteLink', [
      'mgcrea.ngStrap.tooltip',
      'mgcrea.ngStrap.popover',
      'cd.ui.deleteLinkTpl'
    ])
    .directive('cdDeleteLink', deleteLink);


  deleteLink.$inject = ['$tooltip', '$popover'];
  function deleteLink($tooltip, $popover) {
    var directive = {
      templateUrl: 'template/delete-link.html',
      restrict: 'E',
      replace: true,
      controller: DeleteLinkController,
      controllerAs: 'vm',
      scope: {
        action: '@action',
        actionDataReturn: '=actionDataReturn',
        animation:'@animation',
        content: '@content',
        labelBtnAction: '@labelBtnAction',
        labelBtnCancel: '@labelBtnCancel',
        titlePopover: '@titlePopover',
        titleTooltip: '@titleTooltip'
      },
      link: linkFunc
    };

    return directive;

    function linkFunc($scope, $element) {

      //create tooltip
      $tooltip($element,
        {
          title: $scope.titleTooltip,
          animation: $scope.animation
        });

      //create popover
      $popover($element,
        {
          title: $scope.titlePopover,
          template: 'popover/popover.tpl.html',
          animation: $scope.animation,
          placement: 'left',
          contentTemplate: 'template/delete-link-popover-content.html',
          scope: $scope
        });

    }
  }


  DeleteLinkController.$inject = ['$scope'];
  function DeleteLinkController($scope) {
    /* jshint validthis: true */
    var vm = this;

    vm.action = $scope.action;
    vm.content = $scope.content;
    vm.labelBtnAction = $scope.labelBtnAction;
    vm.labelBtnCancel = $scope.labelBtnCancel;
    vm.titlePopover = $scope.titlePopover;
    vm.titleTooltip = $scope.titleTooltip;

    vm.emitEvent = emitEvent;

    function emitEvent() {
      $scope.$emit($scope.action, $scope.actionDataReturn);
    }
  }

}());
