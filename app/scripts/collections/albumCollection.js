define([
	'jquery',
	'underscore',
	'backbone',
	'models/albumModel'
], function($, _, Backbone, AlbumModel) {
	var AlbumCollection = Backbone.Collection.extend({

		model: AlbumModel,

		initialize: function (idArtist) {
			this.idArtist = idArtist;
			this.url = 'https://api.deezer.com/artist/'+ this.idArtist +'/albums?output=jsonp'
		},

		sync: function(method, model, options) {
		    var params = _.extend({
		        url: this.url,
		    	type: 'GET',
		    	dataType: 'jsonp'
		    }, options);

		    return $.ajax(params);
		}
	});

	return AlbumCollection;
});