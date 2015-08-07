let campaignDetailModule = angular.module('app.home.campaigns.campaignDetail', []);

import CampaignDetailConfig from './campaign_detail.config';
import CampaignDetailController from './campaign_detail.controller';
require('./campaign_detail.scss');


campaignDetailModule.config(/* @ngInject */ CampaignDetailConfig);
campaignDetailModule.controller('CampaignDetailController', /* @ngInject */ CampaignDetailController);

export default campaignDetailModule = campaignDetailModule.name
