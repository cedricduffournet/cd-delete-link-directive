(function () {
  'use strict';
  function AppCtrl($scope) {
    /* jshint validthis: true */
    var vm = this;
    vm.action = 'deleteElem';
    vm.delete = deleteElem;

    vm.data = [
      {
        id: 1,
        name: "Row 1"
      },
      {
        id: 2,
        name: "Row 2"
      },
      {
        id: 3,
        name: "Row 3"
      },
      {
        id: 4,
        name: "Row 4"
      }];

    $scope.$on(vm.action, vm.delete);

    function deleteElem(event, info){
      vm.data.splice(info.index,1);
    }
  }


  angular
    .module('MyApp', ['cd.ui.deleteLink'])
    .controller('AppCtrl', AppCtrl);

}());


