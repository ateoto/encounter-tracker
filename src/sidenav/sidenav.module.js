let sidenavModule = angular.module('app.sidenav', []);

import SidenavController from './sidenav.controller';
require('./sidenav.scss');

sidenavModule.controller('SidenavController', /* @ngInject */ SidenavController);

export default sidenavModule = sidenavModule.name