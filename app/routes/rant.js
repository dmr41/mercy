import Ember from 'ember';

export default Ember.Route.extend({


  model: function(params){
    return this.store.fetchById('rant', params.rant_id)
  },

  afterModel: function(model) {
    model.reload();
  }


});
