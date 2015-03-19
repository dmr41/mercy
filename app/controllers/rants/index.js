import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: true,
  actions: {
    newRant: function() {
      this.transitionToRoute('rants.new');
    },

    editRant: function(rant) {
      this.set('isEditing',false);
    },
    editSave: function(rant) {
      var body = rant.get('body');
      var title = rant.get('title');
      if(body && title) {
        this.set('isEditing', false);
        rant.save();
      }
    },


    deleteRant: function(rant_id) {
      this.store.find('rant', rant_id).then(function(rant) {
        rant.deleteRecord();
        rant.save();
      });
    },
  }
});
