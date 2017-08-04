(function() {
    'use strict';

    angular
        .module('appSuwit')
        .controller('AboutController', AboutController);

    AboutController.$inject = ['$scope'];
    function AboutController($scope) {
        var vm = this;
        $scope.about = "ABOUT";
    }
})();