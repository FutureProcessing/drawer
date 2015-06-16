'use strict';

angular.module('drawerApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'ui.router.tabs',
  'toaster',
  'chart.js',
  'ui.checkbox',
  'pascalprecht.translate'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider, I18n) {
    $urlRouterProvider
      .when('/', '/drawing');

    $locationProvider.html5Mode(true);

    $translateProvider.translations('en', I18n.en);
    $translateProvider.preferredLanguage('en');

  });
