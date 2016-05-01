'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('issuance', {
        url: '/swap/{id:string}/issuance',
        templateUrl: 'app/swap/issuance/issuance3.html',
        controller: 'Issuance3Controller',
        controllerAs: 'issuance'
      });
  });
