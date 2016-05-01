'use strict';

angular.module('pizzaSwapApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('events', {
        url: '/swap/{id:string}/events',
        templateUrl: 'app/swap/events/events3.html',
        controller: 'EventsController',
        controllerAs: 'Events'
      });
  });
