'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/swap/{id:string}/events',
        templateUrl: 'app/swap/events/events3.html',
        controller: 'Events3Controller',
        controllerAs: 'Events'
      });
  });
