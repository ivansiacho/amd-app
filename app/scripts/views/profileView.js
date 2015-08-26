define([
    'jquery',
    'backbone',
    'handlebars',
    'text!templatePath/profileTemplate.html'
], function($, Backbone, Handlebars, profileTemplate) {
    var ProfileView = Backbone.View.extend({
        el: $('#artist-profile'),

        render: function(response) {
            var template = Handlebars.compile(profileTemplate);
            return this.$el.html(template(response));
        }
    });

    return ProfileView;
});