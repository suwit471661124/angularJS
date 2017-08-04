
    'use strict';

    angular
        .module('appSuwit')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', '$http'];
    function HomeController($scope) {
        var vm = this;
         $scope.name = 'HOME';
    }
