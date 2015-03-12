import Ember from 'ember';

export default Ember.ObjectController.extend({
  isEditing: true,

  actions: {

    editRant: function(rant) {
      this.set('isEditing',false);
    },
    editCancel: function() {
      this.set('isEditing', true);
    },
    editSave: function(rant) {
      var body = rant.get('body');
      var title = rant.get('title');
      if(body && title) {
        this.set('isEditing', false);
        rant.save();
      }
    },
    testSend: function() {
      alert("made it!")
    },
    deleteRant: function(rant_id) {
      this.store.find('rant', rant_id).then(function(rant) {
        rant.deleteRecord();
        rant.save();
      }.bind(this));
    },
  }
});
