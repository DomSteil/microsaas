'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('swap', {
        url: '/swap/new',
        templateUrl: 'app/swap/swap3.html',
        controller: 'Swap3Controller',
        controllerAs: 'swap'
      });
  });
