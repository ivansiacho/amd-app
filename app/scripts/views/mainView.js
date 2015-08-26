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
			'click .view-artist' : 'viewArtist',
			'click .view-album' : 'viewAlbum'
		},
		initialize: function() {
			inputSearch = this.$('#input-search');
			// Pass in our Router module and call it's initialize function
			this.clean();
			Router.initialize();
		},
		search: function(event) {
			event.preventDefault();
			this.clean();
			this.query = inputSearch.val();

			if (this.query) {
				appRouter.navigate('search/' + this.query, true);
			}
		},
		viewArtist: function(event) {
			event.preventDefault();
			this.clean();
			this.artistId = $(event.target).data('id');
			this.query = $(event.target).data('name');
			appRouter.navigate('albums/' + this.query + '/' + this.artistId, true);
		},
		viewAlbum: function(event) {
			event.preventDefault();
			this.artistId = $(event.target).data('id');
			appRouter.navigate('detail/' + this.artistId, true);
		},
		clean: function() {
			this.$('#main-results').html('');
			this.$('#album-list').html('');
			this.$('#artist-videos').html('');
			this.$('#album-list').html('');
		}
	});

	return mainView;
});