(function () {
    'use strict';

    //load module
    angular.module('appSuwit', [
        'ngRoute',
        'ngResource'
    ]).config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/home', {
                templateUrl: 'home/home.html',
                controller: 'HomeController'
            })
            .when('/api', {
                templateUrl: 'api/api.html',
                controller: 'ApiController'
            })
            .when('/about', {
                templateUrl: 'about/about.html',
                controller: 'AboutController'
            });

        // configure html5 to get links working on jsfiddle
        $locationProvider.html5Mode(true);
    });

})();