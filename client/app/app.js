'use strict';

angular.module('microsaas', [
  'microsaas.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'angular-loading-bar', 
  'ngAnimate',
  'LocalStorageModule',
  'ngToast'
])
  .config(function($urlRouterProvider, $locationProvider, localStorageServiceProvider) {
    $urlRouterProvider
      .otherwise('/login');
      
    localStorageServiceProvider
      .setPrefix('swap');

    $locationProvider.html5Mode(true);
  });
