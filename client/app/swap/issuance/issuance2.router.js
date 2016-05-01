'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('issuance', {
        url: '/swap/{id:string}/issuance',
        templateUrl: 'app/swap/issuance/issuance2.html',
        controller: 'IssuanceController',
        controllerAs: 'issuance'
      });
  });
