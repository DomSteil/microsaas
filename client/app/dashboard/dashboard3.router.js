'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard/{name:string}',
        templateUrl: 'app/dashboard/dashboard3.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });
  });
