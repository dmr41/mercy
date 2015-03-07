import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: true,

  actions: {
    newRant: function() {
      this.transitionToRoute('rants.new');
    },

    editRant: function(rant) {
      var thing = this.get('isEditing')
      this.set('isEditing', false);

    }
  }

});
