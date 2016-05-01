'use strict';

(function() {

class Dashboard4Controller {

  constructor($http, $scope, $stateParams, appConfig, cfpLoadingBar, localStorageService) {
    this.$http = $http;
    this.awesomeThings = [];
    $scope.accounts = [];

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



    $http.get(appConfig.keyserver + 'contracts/Contact').then(response => {
      response.data.forEach(contract => {
        $http.get(appConfig.keyserver + 'contracts/Contact/' + contract + '/state/').then(response => {
          console.log("MICROSAAScontact");
          console.log(response);
          response.data.address = contract;
          response.data.id = contract.substr(0, 4);
          $scope.contract.push(response.data);
        });
      });
    });

  }

}

angular.module('microsaas')
  .controller('Dashboard4Controller', Dashboard4Controller);

})();
