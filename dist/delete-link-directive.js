(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name common.directive:deleteLink
   * @restrict E
   *
   * @description
   * Display a delete link with popover confirmation
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
      controller: deleteLinkController,
      controllerAs: 'vm',
      scope: {
        titlePopover: '@titlePopover',
        titleTooltip: '@titleTooltip',
        idToDelete: '=idToDelete',
        indexToDelete: '=indexToDelete',
        emitOnAction: '=emitOnAction',
        labelBtnAction: '@labelBtnAction',
        labelBtnCancel: '@labelBtnCancel',
        actionDescription: '@actionDescription',
        actionToPerform: '@actionToPerform'
      },
      link: linkFunc
    };

    return directive;

    function linkFunc($scope, $element, $attrs) {

      //create tooltip
      $tooltip($element,
        {
          title: $scope.titleTooltip,
          animation: 'am-flip-x'
        });

      //create popover
      $popover($element,
        {
          title: $scope.titlePopover,
          template: 'popover/popover.tpl.html',
          animation: 'am-flip-x',
          placement: 'left',
          contentTemplate: 'template/delete-link-popover-content.html',
          scope: $scope
        });

      var observer = function (data) {

        if (data === $scope.actionToPerform) {
          var info = {
            type: data,
            id: $scope.idToDelete,
            index: $scope.indexToDelete
          };
          $scope.$emit($scope.emitOnDelete, info);
        }
      };
      $attrs.$observe('action', observer);
    }
  }


  deleteLinkController.$inject = ['$scope'];
  function deleteLinkController($scope) {
    /* jshint validthis: true */
    var vm = this;
    vm.popover = {action: ''};
    vm.titlePopover = $scope.titlePopover;
    vm.titleTooltip = $scope.titleTooltip;
    vm.idToDelete = $scope.idToDelete;
    vm.indexToDelete = $scope.indexToDelete;
    vm.emitOnAction = $scope.emitOnAction;
    vm.labelBtnAction = $scope.labelBtnAction;
    vm.labelBtnCancel = $scope.labelBtnCancel;
    vm.actionDescription = $scope.actionDescription;
    vm.actionToPerform = $scope.actionToPerform;
  }

}());
