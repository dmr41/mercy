import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'}, function(){
    this.route("new");
    this.resource("rant", {path: ':rant_id'}, function(){});
  });

  this.resource("users", function(){
    this.route("new", {path: "/signup"});
    this.resource("rant", {path: ':user_id'}, function(){});
  });
});

export default Router;
