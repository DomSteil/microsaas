'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('swap', {
        url: '/swap/new',
        templateUrl: 'app/swap/swap2.html',
        controller: 'Swap2Controller',
        controllerAs: 'swap'
      });
  });
