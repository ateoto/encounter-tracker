let campaignModule = angular.module('app.home.campaign', []);

import CampaignConfig from './campaign.config';
import CampaignController from './campaign.controller';
require('./campaign.scss');


campaignModule.config(/* @ngInject */ CampaignConfig);
campaignModule.controller('CampaignController', /* @ngInject */ CampaignController);

export default campaignModule = campaignModule.name
