'use strict';

(function() {

class Swap2Controller {

  constructor($http, $scope, $stateParams, appConfig, cfpLoadingBar, $location, localStorageService, $state) {

    $scope.accountContract= {
      accountName: '',
      accountOwner: '',
	  type: '',
	  industry: '',
	  customerRating: '',
	  description: '',
      //,
      //oracleAddress: ''
    };

    /**
     * Get the address of the oracle
     */
    $scope.getOracleAddress = function() {
      $http.get(appConfig.keyserver + 'users/oracle').then(response => {
        console.log("THIS IS THE ORACLE");
        console.log(response.data);
        $scope.accountContract.oracleAddress = response.data[0];
      });
    }
    //$scope.getOracleAddress();

    $scope.user = localStorageService.get('user'); 

    $scope.submit = function(){
      $('#mining-transaction').modal('show');
      /**
       * In this sample app we will fetch the contract src from the page using jQuery.
       * You could get the contract source from where ever you like. 
       */
      var details = {
        password: "thepass",
        src:  $('#contract_source').text()
      };
      
      var req = {
        method: 'POST',
        url: appConfig.keyserver + 'users/' + localStorageService.get('user') + '/' + localStorageService.get('address') + '/contract',
        headers: {
          "content-type": "application/json"
        },
        data : JSON.stringify(details)
      };
      $http(req).then(response => {
        console.log("ADDRESS of POST");
        console.log(response.data);

        $scope.newContract = response.data;
        /**
         * After deploying the smart contract we will call 
         * the contract method and pass in the contract details
         */
        var data = {
          "password": "thepass",
          "method": "setUpAccountDetails",
          "args": {
            "price": $scope.accountContract.price,
            "accountName": $scope.accountContract.accountName,
			"accountOwner": $scope.accountContract.accountOwner,
			"type": $scope.accountContract.type,
			"industry": %scope.accountContract.industry,
			"customerRating": $scope.accountContract.customerRating		
			
            //,
            //"oracleAddress": $scope.accountContract.oracleAddress
          },
          "contract": "Account"
        };
  
        var req = {
         method: 'POST',
         url: appConfig.keyserver + 'users/' + localStorageService.get('user')+ '/'+ localStorageService.get('address') + '/contract/Account/' + $scope.newContract + '/call',
         headers: {
           'Content-Type': 'application/json'
         },
         data: JSON.stringify(data)
        };
    
        $http(req).then(response => {
          /**
           * Now that we have a successfully deployed smart contract 
           * let's transition to the detail view of the contract.
           */
          $('#mining-transaction').modal('hide');
          $('#mining-transaction').on('hidden.bs.modal', function (e) {
            $state.transitionTo('issuance', {id:$scope.newContract});
          });
        }, response => {
            $scope.data = response.data || "Request failed";
            $scope.status = response.status;
        });
      }, response => {
          $scope.data = response.data || "Request failed";
          $scope.status = response.status;
      });
      
    }

  }

}

angular.module('microsaas')
  .controller('Swap2Controller', Swap2Controller);

})();
