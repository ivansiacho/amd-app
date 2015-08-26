define([
	'jquery',
	'underscore',
	'backbone',
	'router'
], function($, _, Backbone, Router) {
	var mainView = Backbone.View.extend({
		el: $('#app-container'),
		events: {
			'click .button-search' : 'search',
			'click .view-artist' : 'viewArtist',
			'click .view-album' : 'viewAlbum'
		},
		initialize: function() {
			inputSearch = this.$('#input-search');
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
			var $target = $(event.target);
			this.artistId = $target.data('id');
			this.query = $target.data('name');
			this.clean();
			appRouter.navigate('albums/' + this.query + '/' + this.artistId, true);
		},
		viewAlbum: function(event) {
			event.preventDefault();
			var $profileName = $('.profile-name');
			this.albumId = $(event.target).data('id');
			this.artistId = $profileName.data('id');
			this.query = $profileName.html();
			this.clean();
			appRouter.navigate('detail/' + this.artistId + '/' + this.query + '/' + this.albumId, true);
		},
		clean: function() {
			this.$('#main-results').html('');
			this.$('#album-list').html('');
			this.$('#artist-videos').html('');
			this.$('#artist-profile').html('');
			this.$('#album-comments').html('');
			console.log('clean');
		}
	});

	return mainView;
});