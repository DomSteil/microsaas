(function(angular, undefined) {
'use strict';

angular.module('microsaas.constants', [])

.constant('appConfig', {userRoles:['guest','user','admin'],apiEndPoint:'http://52.165.36.32/eth/v1.1/',keyserver:'http://52.165.36.32:8000/'})

;
})(angular);
