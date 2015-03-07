import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: true,

  actions: {
    newRant: function() {
      this.transitionToRoute('rants.new');
    },

    editRant: function(rant) {
      this.set('isEditing',false);
    }
  }
});
