 export default /* @ngInject */ function CampaignDetailConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('public.home.campaigns.campaignDetail', {
        url: "/home/campaigns/campaignDetail",
        views: {
            'content@': {
                templateUrl: require("./campaign_detail.tpl.html"),
                controller: "CampaignDetailController as campaignDetail"
            }
        }
    });
}
