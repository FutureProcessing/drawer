'use strict';

angular.module('drawerApp')
  .controller('MainCtrl', function ($scope) {

    $scope.tabData = [
      {
        heading: 'Drawing',
        route: 'main.drawing'
      },
      {
        heading: 'Statistics',
        route: 'main.statistics'
      }
    ];
  });
