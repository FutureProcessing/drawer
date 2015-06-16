'use strict';

angular.module('drawerApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('main.drawing', {
        url: 'drawing',
        templateUrl: 'app/drawing/drawing.html',
        controller: 'DrawingController'
      })
      .state('main.statistics', {
        url: 'statistics',
        templateUrl: 'app/statistics/statistics.html',
        controller: 'StatisticsController'
      });
  });
