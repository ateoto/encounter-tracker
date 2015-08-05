let campaignModule = angular.module('app.home.campaign', []);

import CampaignConfig from './campaign.config';
import CampaignController from './campaign.controller';
require('./campaign.scss');

/* @ngInject */
campaignModule.config(CampaignConfig);
/* @ngInject */
campaignModule.controller('CampaignController', CampaignController);

export default campaignModule = campaignModule.name
