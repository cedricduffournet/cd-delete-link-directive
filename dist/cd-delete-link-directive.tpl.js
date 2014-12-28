angular.module('cd.ui.deleteLinkTpl', ['template/delete-link-popover-content.html', 'template/delete-link.html']);

angular.module("template/delete-link-popover-content.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/delete-link-popover-content.html",
    "<div class=\"btn-toolbar text-center\">\n" +
    "    <p ng-bind=\"vm.content\"></p>\n" +
    "    <div class=\"btn-toolbar\">\n" +
    "\n" +
    "        <button class='btn btn-info' ng-bind=\"vm.labelBtnCancel\" ng-click=\"$hide()\" ng-bind=\"titleCancel\"></button>\n" +
    "        <button class='btn btn-danger' ng-bind=\"vm.labelBtnAction\" ng-click=\"vm.emitEvent();$hide()\"></button>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("template/delete-link.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/delete-link.html",
    "<button type=\"button\"  class=\"btn btn-danger btn-sm\">\n" +
    "    <span class=\"glyphicon glyphicon-trash\"></span>\n" +
    "</button>");
}]);
