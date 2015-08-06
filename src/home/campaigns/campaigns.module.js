let campaignsModule = angular.module('app.home.campaigns', []);

import CampaignsConfig from './campaigns.config';
import CampaignsController from './campaigns.controller';
require('./campaigns.scss');


campaignsModule.config(/* @ngInject */ CampaignsConfig);
campaignsModule.controller('CampaignsController', /* @ngInject */ CampaignsController);

export default campaignsModule = campaignsModule.name
