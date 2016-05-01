'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('swap', {
        url: '/swap/new',
        templateUrl: 'app/swap/swap6.html',
        controller: 'Swap6Controller',
        controllerAs: 'swap'
      });
  });
