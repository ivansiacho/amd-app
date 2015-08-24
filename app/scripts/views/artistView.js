define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templatePath/artistTemplate.html'
], function($, Backbone, Handlebars, artistTemplate) {
    var ArtistView = Backbone.View.extend({
        el: $('#main-results'),

        render: function(response) {
            var template = Handlebars.compile(artistTemplate);
            return this.$el.html(template(response));
        }
    });

    return ArtistView;
});