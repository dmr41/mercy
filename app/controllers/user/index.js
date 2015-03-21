import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['rants/index'],
  actions: {
    deleteRant: function(rant_id) {
      console.log("HERE")
      var rantsIndexController = this.get('controllers.rants/index');
      rantsIndexController.store.find('rant', rant_id).then(function(rant) {
        rant.deleteRecord();
        rant.save();
      });
    }
  }

});
