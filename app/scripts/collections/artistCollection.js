define([
	'jquery',
	'underscore',
	'backbone',
	'models/artistModel'
], function($, _, Backbone, ArtistModel) {
	var ArtistCollection = Backbone.Collection.extend({

		model: ArtistModel,

		initialize: function (query) {
			this.queryArtist = query;
		},

		/*url: function () {
			//return 'https://api.spotify.com/v1/search?type=artist&q=' + this.queryArtist;
			//return 'https://api.deezer.com/search/artist/?output=jsonp&q=' + this.queryArtist;
			//return 'https://www.googleapis.com/books/v1/volumes?q='+ this.queryArtist +'&key=AIzaSyCrcdybDlXV1xg7kEkD0yrToGEshrrj5Kc'
		}*/
		sync: function(method, model, options) {
		    var params = _.extend({
		        url: 'https://api.deezer.com/search/artist/?output=jsonp&q=' + this.queryArtist,
		    	type: 'GET',
		    	dataType: 'jsonp'
		    }, options);

		    return $.ajax(params);
		}
	});

	return ArtistCollection;
});