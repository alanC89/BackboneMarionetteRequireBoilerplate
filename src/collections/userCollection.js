define([
  'jquery',
  'underscore',
  'backbone',
  'marionette',
  '../models/user'
], function($, _, Backbone, Marionette, User) {
  'use strict';

  return Backbone.Collection.extend({
    model: User,
    comparator: "name"
  });
});