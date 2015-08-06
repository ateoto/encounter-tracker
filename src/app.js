// Import angular
import 'angular/angular.js';
// Material design css
import 'angular-material/angular-material.css';
// Icons
import 'font-awesome/css/font-awesome.css';
// Animation
import angularAnimate from 'angular-animate';
// Materail Design lib
import angularMaterial from 'angular-material';
// Router
import angularUIRouter from 'angular-ui-router';
// Our modules
import home from './home/home.module.js';
import campaigns from './home/campaigns/campaigns.module.js';
import sidenav from './sidenav/sidenav.module.js';

// Project specific style
import './scss/bootstrap.scss'

// Create our app module
let appModule = angular.module('app', [
    angularMaterial,
    angularAnimate,
    angularUIRouter,
    home,
    campaigns,
    sidenav
])

// appModule.run(($log) => {
//     $log.info('app running');
// })

appModule.config(($mdThemingProvider, $stateProvider) => {

    // configure our Material theme
    $mdThemingProvider
        .theme('default')
        .primaryPalette('green', {
            'default': '600'
        })
        .accentPalette('brown', {
            'default': '600'
        });

    $stateProvider.state('public', {
        url: "/public",
        abstract: true,
        views: {
            'sidenav': {
                templateUrl: require("./sidenav/sidenav.tpl.html"),
                controller: "SidenavController as sidenav"
            }
        }
    });
});

appModule.run(function($q, $rootScope, $window, $mdSidenav) {


    $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            $rootScope.isLoading = false;
        })

    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            $mdSidenav('leftNav').close();
            $rootScope.isLoading = true;
        })
});

appModule.controller('MainController', function($mdSidenav) {
    let vm = this;
    vm.toggleSidenav = () => {
        $mdSidenav('leftNav').toggle();
    };
    vm.closeSidenav = () => {
        $mdSidenav('leftNav').close();
    };
});

export default appModule;
