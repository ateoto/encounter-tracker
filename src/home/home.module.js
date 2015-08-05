let homeModule = angular.module('app.home', []);

import HomeConfig from './home.config';
import HomeController from './home.controller';
require('./home.scss');

/* @ngInject */ 
homeModule.config(HomeConfig);
/* @ngInject */ 
homeModule.controller('HomeController', HomeController);

export default homeModule = homeModule.name
