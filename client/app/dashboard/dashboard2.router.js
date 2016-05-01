'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard/{name:string}',
        templateUrl: 'app/dashboard/dashboard2.html',
        controller: 'Dashboard2Controller',
        controllerAs: 'dashboard'
      });
  });
