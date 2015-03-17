import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource("rants", {path: '/'}, function(){
    this.route("new");
    this.route("signup");
    this.resource("rant", {path: 'rants/:rant_id'}, function(){});
  });

  this.resource("users", function(){
    this.route("new");
    this.resource("user", {path: ':user_id'}, function(){});
  });
  this.route('login');
  this.route('secret');
});

export default Router;
