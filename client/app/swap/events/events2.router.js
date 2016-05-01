'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/swap/{id:string}/events',
        templateUrl: 'app/swap/events/events2.html',
        controller: 'Events2Controller',
        controllerAs: 'Events'
      });
  });
