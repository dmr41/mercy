import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: true,
  outsidethis: this,
  testRoute: function () {
    this.transitionToRoute('rants.index');
  }.property('isValidated'),

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

  }

});
