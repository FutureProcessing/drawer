'use strict';

var translations = [];

translations.en = {
  MAIN: {
    HEADER: 'Drawer',
    FOOTER: 'All rights reserved'
  },
  DRAWING: {
    DRAW_ONCE: 'Draw each person once',
    DRAW: 'Draw'
  },
  STATISTICS: {
    DATE_FROM: 'From:',
    DATE_TO: 'To:',
    INVALID_DATES: {
      TITLE: 'Invalid dates',
      MESSAGE: 'From date should be less or equal than to'
    },
    FILTER: 'Filter'
  }
};

angular.module('drawerApp')
  .constant('I18n', {
    en: translations.en

  });


