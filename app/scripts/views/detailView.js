define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templatePath/detailTemplate.html'
], function($, Backbone, Handlebars, DetailModel, detailTemplate) {
    var DetailView = Backbone.View.extend({
        el: $('#album-list'),

        render: function(response) {
            console.log(response);
            var template = Handlebars.compile(detailTemplate);
            return this.$el.html(template(response));
        }
    });

    return DetailView;
});