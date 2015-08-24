// Filename: app.js
define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router) {
	var mainView = Backbone.View.extend({
		el: $('#app-container'),
		query: '',
		artistId: '',
		events: {
			'click .button-search' : 'search',
			'click .view-more' : 'view'
		},
		initialize: function() {
			inputSearch = this.$('#input-search');
			// Pass in our Router module and call it's initialize function
			Router.initialize();
		},
		search: function(event) {
			this.query = inputSearch.val();

			if (this.query) {
				appRouter.navigate('search/' + this.query, true);
			}
		},
		view: function(event) {
			this.artistId = $(event.target).data('id');
			appRouter.navigate('albums/' + this.artistId, true);
		}
	});

	return mainView;
});