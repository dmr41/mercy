import Ember from 'ember';

export default Ember.Route.extend({


  model: function(){
    console.log('Inside Rants model');
    return this.store.fetchAll('rant');
  },

  // afterModel: function(model) {
  //   model.reload();
  // }

});
