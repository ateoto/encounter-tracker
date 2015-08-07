let monstersModule = angular.module('app.home.monsters', []);

import MonstersConfig from './monsters.config';
import MonstersController from './monsters.controller';
require('./monsters.scss');


monstersModule.config(/* @ngInject */ MonstersConfig);
monstersModule.controller('MonstersController', /* @ngInject */ MonstersController);

export default monstersModule = monstersModule.name
