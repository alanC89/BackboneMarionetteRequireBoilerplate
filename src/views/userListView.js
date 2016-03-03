define([
  'marionette',
  './userView'
], function(Marionette, UserView) {
  'use strict';

  return Marionette.CollectionView.extend({

    tagName: "ul",
    childView: UserView
  });

});