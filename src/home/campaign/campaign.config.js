 export default /* @ngInject */ function CampaignConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('public.home.campaign', {
        url: "/home/campaign",
        views: {
            'content@': {
                templateUrl: require("./campaign.tpl.html"),
                controller: "CampaignController as campaign"
            }
        }
    });
    $urlRouterProvider.otherwise("/public/home/campaign");
}
