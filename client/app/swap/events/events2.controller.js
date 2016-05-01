'use strict';

(function() {
class Events2Controller {
  constructor($http, $stateParams, $scope, appConfig, cfpLoadingBar, localStorageService, $state) {
    var name = localStorageService.get('user');
    $scope.createQuote = {};
    $scope.id = $stateParams.id;
    $scope.isHappy = false;

    /**
     * Get the current state of the contract.
     */
    $scope.getContractState = function() {
      $http.get(appConfig.keyserver + 'contracts/Quote/' + $stateParams.id + '/state/').then(response => {
        $scope.quoteState = response.data;
      });
    }
    $scope.getContractState();

    /**
     * Get the public address for the oracle. 
     */
    $scope.getPcs = function(){
      $http.get(appConfig.keyserver + 'users/oracle' ).then(response =>{
        $scope.pcs = response.data[0];
      });
    };
    $scope.getPcs();

    /**
     * Rate Satisfaction 
     */
    $scope.rateQuote = function(choice) {
      $('#mining-transaction').modal('show');
      $scope.isHappy = choice;
      var data = {
        "password": "thepass",
        "method": "rateQuote",
        "args": {
          "isHappy": $scope.isAccurate
        },
        "contract": "Quote"
      };

      var req = {
       method: 'POST',
       url: appConfig.keyserver + 'users/oracle/'+ $scope.pcs + '/contract/Quote/' + $stateParams.id + '/call',
       headers: {
         'Content-Type': 'application/json'
       },
       data: JSON.stringify(data)
      };

      $http(req).then(response => {
        $scope.getContractState();
        $('#mining-transaction').modal('hide');
        $('#quoteConfirmation').modal('show');
      }, response => {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
    }
    $('#quoteConfirmation').on('hidden.bs.modal', function () {
      $state.transitionTo('issuance', {id:$stateParams.id});
    });
  }
}

angular.module('microsaas')
  .controller('Events2Controller', Events2Controller);
})();
