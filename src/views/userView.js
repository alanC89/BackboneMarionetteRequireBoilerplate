define([
  'underscore',
  'marionette',
  'text!./userView.html'
], function(_, Marionette, userTemplate) {
  'use strict';

  return Marionette.ItemView.extend({
    
    tagName: "li",
    template: _.template(userTemplate)

  });

});