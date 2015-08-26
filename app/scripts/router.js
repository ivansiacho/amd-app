define([
    'jquery',
    'underscore',
    'backbone',
    'collections/artistCollection',
    'collections/albumCollection',
    'collections/videoCollection',
    'models/detailModel',
    'views/artistView',
    'views/albumView',
    'views/profileView',
    'views/videoView',
    'views/detailView'
], function($, _, Backbone, ArtistCollection, AlbumCollection, VideoCollection, DetailModel, ArtistView, AlbumView, ProfileView, VideoView, DetailView) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            '*actions/:query' : 'searchArtist'
        },

        searchArtist: function(action, query) {
            artistCollection = new ArtistCollection(query);
            albumCollection = new AlbumCollection(query);
            videoCollection = new VideoCollection(query);
            detailModel = new DetailModel(query);

            if (action === 'search') {
                artistCollection.fetch({
                    success: function(model, response) {
                        artistView.render(response);
                    }
                });
            } else if (RegExp('\\albums\\b').test(action)) {
                var artist = action.replace('albums/','');

                artistCollection.fetch({
                    url: 'https://api.deezer.com/artist/'+ query +'?output=jsonp',
                    success: function(model, response) {
                        profileView.render(response);
                    }
                });
                albumCollection.fetch({
                    success: function(model, response) {
                        albumView.render(response);
                    }
                });
                videoCollection.fetch({
                    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyCrcdybDlXV1xg7kEkD0yrToGEshrrj5Kc&q=' + artist,
                    success: function(model, response) {
                        videoView.render(response);
                    }
                });
            } else if (action === 'detail') {
                detailModel.set({
                    id: query
                });
                console.log(detailModel);
                detailView.render(detailModel.id);
            }
        }
    });

    var initialize = function() {
        appRouter = new AppRouter;

        artistView = new ArtistView;
        albumView = new AlbumView;
        profileView = new ProfileView;
        videoView = new VideoView;
        detailView = new DetailView;

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});