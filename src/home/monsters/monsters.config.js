 export default /* @ngInject */ function MonstersConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('public.home.monsters', {
        url: "/home/monsters",
        views: {
            'content@': {
                templateUrl: require("./monsters.tpl.html"),
                controller: "MonstersController as monsters"
            }
        }
    });
}
