import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: true,
  outsidethis: this,


  isEditingCurrent: function() {
    if(this.get('sessionId')) {
      return this.get('currentId').toString() === this.get('sessionId').toString();
    }
    else {
      return this.get('currentId') === this.get('sessionId');
    }
  }.property('sessionId'),

  needs: ["rants"],
  testRoute: function () {
    this.transitionToRoute('rants.index');
  }.property('isValidated'),

  componentSelfSend: true,

  actions: {
    newRant: function() {
      this.transitionToRoute('rants.new');
    },

    editRant: function(rant) {
      this.set('isEditing', false);

    },
    editCancel: function() {
      this.set('isEditing', true);

    },

    editSave: function(rant) {

      var body = rant.get('body');
      var title = rant.get('title');
      if(body && title) {
        this.set('isEditing', true);
        rant.save();
      };
    },

    componentDeleteSend: function(rant_id) {
      this.sendAction('insideRantComponent', rant_id);
    },
  }

});
