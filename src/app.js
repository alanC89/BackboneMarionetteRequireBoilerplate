define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  'collections/userCollection',
  'views/userListView'
], function($, _, Backbone, Marionette, UserCollection, UserListView) {
  'use strict';

  // Creates a new Marionette application. 
  var App = new Marionette.Application();

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
    var users = new UserCollection([
      {
        name: "Bob"
      },
      {
        name: "Alice"
      },
      {
        name: "Charlie"
      }
    ]);

    var userListView = new UserListView({
      collection: users
    });

    App.regions.main.show(userListView);
  });

  // Add the main region, that will hold the page layout.

  // Returns the app object to be available to other modules through require.js.
  return App;
});