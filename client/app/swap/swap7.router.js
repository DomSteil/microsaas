'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('swap', {
        url: '/swap/new',
        templateUrl: 'app/swap/swap7.html',
        controller: 'Swap7Controller',
        controllerAs: 'swap'
      });
  });
