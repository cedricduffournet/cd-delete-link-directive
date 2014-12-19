angular.module('cdDeleteLinkTemplates', ['template/delete-link-popover-content.html', 'template/delete-link.html']);

angular.module("template/delete-link-popover-content.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/delete-link-popover-content.html",
    "<div class=\"btn-toolbar text-center\">\n" +
    "    <p ng-bind=\"actionDescription\"></p>\n" +
    "    <div class=\"btn-toolbar\">\n" +
    "\n" +
    "        <button class='btn btn-info' ng-bind=\"vm.labelBtnCancel\" ng-click=\"$hide()\" ng-bind=\"titleCancel\"></button>\n" +
    "        <button class='btn btn-danger' ng-bind=\"vm.labelBtnAction\" ng-click=\"vm.popover.action=vm.actionToPerform;$hide()\"></button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("template/delete-link.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/delete-link.html",
    "<a href class=\"btn btn-danger btn-sm\" deleteElem=\"true\"  action=\"{{vm.popover.action}}\" idToDelete=\"idToDelete\">\n" +
    "    <span class=\"glyphicon glyphicon-trash\"></span>\n" +
    "</a>");
}]);
