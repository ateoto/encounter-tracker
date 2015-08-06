 export default /* @ngInject */ function CampaignsConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('public.home.campaigns', {
        url: "/home/campaigns",
        views: {
            'content@': {
                templateUrl: require("./campaigns.tpl.html"),
                controller: "CampaignsController as campaigns"
            }
        }
    });
}
