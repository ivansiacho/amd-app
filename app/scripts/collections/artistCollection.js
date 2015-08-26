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
			this.url = 'https://api.deezer.com/search/artist/?output=jsonp&q=' + this.queryArtist;
		},

		/*url: function () {
			//return 'https://api.spotify.com/v1/search?type=artist&q=' + this.queryArtist;
			//return 'https://api.deezer.com/search/artist/?output=jsonp&q=' + this.queryArtist;
			//return 'https://www.googleapis.com/books/v1/volumes?q='+ this.queryArtist +'&key=AIzaSyCrcdybDlXV1xg7kEkD0yrToGEshrrj5Kc'
		}*/
		sync: function(method, model, options) {
		    var params = _.extend({
		        url: this.url,
		    	type: 'GET',
		    	dataType: 'jsonp'
		    }, options);

		    return $.ajax(params);
		}/*,

		byArtist: function (id) {
	        filtered = this.filter(function (box) {
	            return box.get('id') === id;
	        });

	        return new ArtistCollection(filtered);
	    }*/
	});

	return ArtistCollection;
});