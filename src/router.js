define([
  'backbone',
  'marionette',
  'controller'
  
], function(Backbone, Marionette, controller) {
  'use strict';

  var Router = Backbone.Marionette.AppRouter.extend({

    appRoutes: {
      '' : 'index'
    }

  });

  return new Router({
    controller: controller
  });

});