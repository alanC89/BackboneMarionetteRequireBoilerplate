define([
  'jquery',
  'underscore',
  'backbone',
  'marionette'

], function($, _, Backbone, Marionette) {
  'use strict';

  // Creates a new Marionette application. 
  var App = new Marionette.Application();

  App.StaticView = Marionette.ItemView.extend({
    template: "#static-template"
  });

  App.on("before:start", function(){
        var RegionContainer = Marionette.LayoutView.extend({
          el: "#app-container",

          regions: {
            main: "#main-region"
          }
        });

      App.regions = new RegionContainer();
  });

  App.on("start", function(){
    var staticView = new App.StaticView();
    App.regions.main.show(staticView);
  });

  // Add the main region, that will hold the page layout.

  // Returns the app object to be available to other modules through require.js.
  return App;
});