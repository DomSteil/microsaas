'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('swap', {
        url: '/swap/new',
        templateUrl: 'app/swap/swap4.html',
        controller: 'Swap4Controller',
        controllerAs: 'swap'
      });
  });
