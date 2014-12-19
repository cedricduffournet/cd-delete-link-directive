basePath = '..';
autoWatch = true;
singleRun = false;
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'bower_components/angular/angular.js',
  'bower_components/angular-mocks/angular-mocks.js',
  'bower_components/angular-strap/dist/modules/dimensions.js',
  'bower_components/angular-strap/dist/modules/tooltip.js',
  'bower_components/angular-strap/dist/modules/tooltip.tpl.js',
  'bower_components/angular-strap/dist/modules/popover.js',
  'bower_components/angular-strap/dist/modules/popover.tpl.js',
  'src/template/cd-delete-link-directive.tpl.js',
  'src/cd-delete-link-directive.js',
  'src/cd-delete-link-directive.spec.js'
];
browsers = ['Chrome'];
reporters = ['progress', 'dots'];
colors = true;