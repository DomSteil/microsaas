'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard



  constructor($scope, $location, localStorageService, $http, appConfig, $interval, cfpLoadingBar) {
    $scope.profile = {};
    $scope.updateNav = function(){
      console.log("update nav");
      $scope.profile.name = localStorageService.get('user');
      $http.get(appConfig.apiEndPoint + 'account?address=' + localStorageService.get('address'),{
        ignoreLoadingBar: true
      }).then(response => {
        $scope.profile.balance = (response.data[0].balance / 1000000000000000000).toFixed(3);
      });
    };

    $scope.updateNav();
    // ONLY POLL ON STATE PAGE
    var fetchState = $interval($scope.updateNav, 3000);

    // $scope.$on("$destroy", function handler() {
    //     $interval.cancel(fetchState);
    // });

    $scope.logout = function(){
      localStorageService.set('user', '');
      localStorageService.set('address', '');
      $location.path('/login');
    }
    $scope.account = function(){
      $location.path('/account')
    }
    $scope.opportunity = function(){
      $location.path('/opportunity')
    }
    $scope.contact = function(){
      $location.path('/contact')
    }
    $scope.quote = function(){
      $location.path('/quote')
    }
    $scope.agreement = function(){
      $location.path('/agreement')
    }
    $scope.agreement = function(){
      $location.path('/order')
    }
    $scope.agreement = function(){
      $location.path('/asset')
    }
  }
}

angular.module('microsaas')
  .controller('NavbarController', NavbarController);
