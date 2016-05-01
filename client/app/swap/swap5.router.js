'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('swap', {
        url: '/swap/new',
        templateUrl: 'app/swap/swap5.html',
        controller: 'Swap5Controller',
        controllerAs: 'swap'
      });
  });
