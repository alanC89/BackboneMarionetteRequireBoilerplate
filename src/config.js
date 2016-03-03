'use strict';
/*
 * The configuration file for require.js holds all dependency declarations for
 * the application. This is the first file, that will be loaded by require.js
 * and it holds a reference to the main.js file, that starts the app itself.
 */
require.config({

  // deps holds dependencies to load as soon as require is defined.
  deps: ['main'],

  // Paths that contain the various different javascript files.
  paths: {
    jquery: '../node_modules/jquery/dist/jquery',
    underscore: '../node_modules/underscore/underscore',
    backbone: '../node_modules/backbone/backbone',
    marionette: '../node_modules/backbone.marionette/lib/backbone.marionette',
    text: '../node_modules/requirejs-text/text'
  },

  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }

});