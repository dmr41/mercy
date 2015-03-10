import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: true,

  actions: {

    editRant: function(rant) {
      this.set('isEditing',false);
    },
    editCancel: function() {
      this.set('isEditing', true);

    }
  }
});
