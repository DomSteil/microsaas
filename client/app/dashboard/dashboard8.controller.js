'use strict';

(function() {

class Dashboard8Controller {

  constructor($http, $scope, $stateParams, appConfig, cfpLoadingBar, localStorageService) {
    this.$http = $http;
    this.awesomeThings = [];
    $scope.contracts = [];

    /**
     * We are saving user data in local storage.
     * You can very easily swap out local storage for a real database.
     */
    $scope.name = localStorageService.get('user');

    var getAccountData = function(address) {
      $http.get(appConfig.apiEndPoint + 'account?address=' + address).then(response =>{
        $scope.balance = (response.data[0].balance / 1000000000000000000).toFixed(3);
        localStorageService.set('address', address);
      });
    };

    $http.get(appConfig.keyserver + 'users/' + $stateParams.name).then(response =>{
      $scope.user = response.data[0];
      getAccountData($scope.user);
    });



    $http.get(appConfig.keyserver + 'contracts/Asset').then(response => {
      response.data.forEach(contract => {
        $http.get(appConfig.keyserver + 'contracts/Asset/' + contract + '/state/').then(response => {
          console.log("MICROSAASasset");
          console.log(response);
          response.data.address = contract;
          response.data.id = contract.substr(0, 4);
          $scope.contracts.push(response.data);
        });
      });
    });

  }

}

angular.module('microsaas')
  .controller('Dashboard8Controller', Dashboard8Controller);

})();
