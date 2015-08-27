define([
    'jquery',
    'backbone',
    'collections/artistCollection',
    'collections/albumCollection',
    'collections/videoCollection',
    'models/detailModel',
    'views/artistView',
    'views/albumView',
    'views/profileView',
    'views/videoView',
    'views/detailView',
    'views/commentView'
], function($, Backbone, ArtistCollection, AlbumCollection, VideoCollection, DetailModel, ArtistView, AlbumView, ProfileView, VideoView, DetailView, CommentView) {
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
            } else if (RegExp('\\balbums\\b').test(action)) {
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
            } else if (RegExp('\\bdetail\\b').test(action)) {
                var actionPath = action.replace('detail/','').split('/');

                artistCollection.fetch({
                    url: 'https://api.deezer.com/artist/'+ actionPath[0] +'?output=jsonp',

                    success: function(model, response) {
                        profileView.render(response);
                    }
                });

                videoCollection.fetch({
                    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyCrcdybDlXV1xg7kEkD0yrToGEshrrj5Kc&q=' + actionPath[1],

                    success: function(model, response) {
                        videoView.render(response);
                    }
                });

                albumCollection.fetch({
                    url: 'http://api.deezer.com/album/'+ query +'/comments?output=jsonp',

                    success: function(model, response) {
                        commentView.render(response);
                    }
                });

                detailModel.set({
                    id: query
                });

                detailView.render(detailModel.attributes);
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
        commentView = new CommentView;

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});