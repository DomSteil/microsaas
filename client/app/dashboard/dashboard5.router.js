'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard/{name:string}',
        templateUrl: 'app/dashboard/dashboard5.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      });
  });
