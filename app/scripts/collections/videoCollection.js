define([
	'jquery',
	'underscore',
	'backbone',
	'models/videoModel'
], function($, _, Backbone, VideoModel) {
	var VideoCollection = Backbone.Collection.extend({

		model: VideoModel,

		url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=AIzaSyCrcdybDlXV1xg7kEkD0yrToGEshrrj5Kc',

		parse: function(resp) {
			console.log(resp.items);
			return resp.items;
		}
	});

	return VideoCollection;
});