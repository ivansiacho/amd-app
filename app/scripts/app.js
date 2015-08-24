// Filename: app.js
define([
	'jquery',
	'underscore',
	'backbone'
], function($, _, Backbone){
	var initialize = function(){
		// Pass in our Router module and call it's initialize function
		//Router.initialize();
		console.log('Hello from app.js!');
	}

	return {
		initialize: initialize
	};
});