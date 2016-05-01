'use strict';

angular.module('microsaas')
  .config(function($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/login',
        // templateUrl: 'app/main/main.html',
        // controller: 'MainController',
        // controllerAs: 'main'
      });
  });
