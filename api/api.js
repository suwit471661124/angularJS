(function () {
    'use strict';

    angular
        .module('appSuwit')
        .controller('ApiController', ApiController);

    ApiController.$inject = ['$scope','$http'];
    function ApiController($scope,$http) {
        var vm = this;
        vm.start_period= '2017-07-31';
        vm.end_period= '2017-07-31';
        // vm.data = [];
        $http.defaults.headers.common['api-key'] = 'U9G1L457H6DCugT7VmBaEacbHV9RX0PySO05cYaGsm'; 
        vm.fetch = function () {
            $http({
                method: 'GET',
                url: `https://iapi.bot.or.th/Stat/Stat-ExchangeRate/DAILY_AVG_EXG_RATE_V1/?start_period=${vm.start_period}&end_period=${vm.end_period}`
            }).then(function (response) {
                console.log(response);
                $scope.data = response.data.result.data.data_detail;
            }, function (response) {
                $scope.name = response.login || 'Request failed';
            });
        };
        vm.fetch();
    }
})();