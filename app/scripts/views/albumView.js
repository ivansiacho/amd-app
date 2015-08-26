define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templatePath/albumTemplate.html'
], function($, Backbone, Handlebars, albumTemplate) {
    var AlbumView = Backbone.View.extend({
        el: $('#album-list'),

        render: function(response) {
            var template = Handlebars.compile(albumTemplate);
            return this.$el.html(template(response));
        }
    });

    return AlbumView;
});