'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard/{name:string}',
        templateUrl: 'app/dashboard/dashboard8.html',
        controller: 'Dashboard8Controller',
        controllerAs: 'dashboard'
      });
  });
