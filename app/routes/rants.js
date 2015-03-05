import Ember from 'ember';

export default Ember.Route.extend({
  stuff: localStorage.setItem('stuff', false),
  model: function(){
    return this.store.find('rant').then(function(rants){
      var stuff = localStorage.getItem('stuff');
      stuff = localStorage.setItem('stuff', false);
      return rants;
    });
  },





});
