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
import campaign from './home/campaign/campaign.module.js';
import sidenav from './sidenav/sidenav.module.js';

// Project specific style
import './scss/bootstrap.scss'

// Create our app module
let appModule = angular.module('app', [
    angularMaterial,
    angularAnimate,
    angularUIRouter,
    home,
    campaign,
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
                templateUrl: require("./sidenav/sidenav.html"),
                controller: "SidenavController as sidenav"
            }
        }
    });
});

appModule.controller('MainController', function($mdSidenav) {
    let vm = this;
    vm.toggleSidenav = () => {
        $mdSidenav('left').toggle();
    };
    vm.closeSidenav = () => {
        $mdSidenav('left').close();
    };
});

export default appModule;
