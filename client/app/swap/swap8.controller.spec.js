'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('swap', {
        url: '/swap/new',
        templateUrl: 'app/swap/swap8.html',
        controller: 'Swap8Controller',
        controllerAs: 'swap'
      });
  });
