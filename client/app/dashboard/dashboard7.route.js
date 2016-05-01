'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('dashboard', {
        url: '/dashboard/{name:string}',
        templateUrl: 'app/dashboard/dashboard7.html',
        controller: 'Dashboard7Controller',
        controllerAs: 'dashboard'
      });
  });
