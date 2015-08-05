let homeModule = angular.module('app.home', []);

import HomeConfig from './home.config';
import HomeController from './home.controller';
require('./home.scss');


homeModule.config(/* @ngInject */ HomeConfig);
homeModule.controller('HomeController', /* @ngInject */ HomeController);

export default homeModule = homeModule.name
