define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templatePath/videoTemplate.html'
], function($, Backbone, Handlebars, videoTemplate) {
    var VideoView = Backbone.View.extend({
        el: $('#artist-videos'),

        render: function(response) {
            var template = Handlebars.compile(videoTemplate);
            return this.$el.html(template(response));
        }
    });

    return VideoView;
});