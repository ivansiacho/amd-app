define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templatePath/commentTemplate.html'
], function($, Backbone, Handlebars, commentTemplate) {
    var CommentView = Backbone.View.extend({
        el: $('#album-comments'),

        render: function(response) {
            var template = Handlebars.compile(commentTemplate);
            return this.$el.html(template(response));
        }
    });

    return CommentView;
});