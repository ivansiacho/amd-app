define([
    'jquery',
    'underscore',
    'backbone',
    'collections/artistCollection',
    'collections/albumCollection',
    'views/artistView'
], function($, _, Backbone, ArtistCollection, AlbumCollection, ArtistView) {
    var AppRouter = Backbone.Router.extend({

        routes: {
            '*actions/:query' : 'searchAll'
        },

        searchAll: function(action, query) {
            artistCollection = new ArtistCollection(query);
            albumCollection = new AlbumCollection(query);

            switch(action) {
                case 'search':
                    artistCollection.fetch({
                        success: function(model, response) {
                            artistView.render(response);
                        }
                    });
                break;

                case 'albums':
                    console.log(action);
                    albumCollection.fetch({
                        success: function(model, response) {
                            //artistView.render(response);
                        }
                    });
                break;
            }
        }
    });

    var initialize = function(){
        appRouter = new AppRouter;

        artistView = new ArtistView;

        Backbone.history.start();
    };

    return {
        initialize: initialize
    };
});