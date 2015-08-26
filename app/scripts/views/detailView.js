define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templatePath/detailTemplate.html'
], function($, Backbone, Handlebars, detailTemplate) {
    var DetailView = Backbone.View.extend({
        el: $('#album-list'),

        render: function(response) {
            var template = Handlebars.compile(detailTemplate);
            return this.$el.html(template(response));
        }
    });

    return DetailView;
});