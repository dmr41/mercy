import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['rants/index'],
  isEditing: true,

  actions: {

    editRant: function(rant) {
      this.set('isEditing',false);
    },
    editCancel: function() {

      this.set('isEditing', true);
      this.transitionToRoute('rants.index')
    },

    newRant: function () {
    var user = this.get('session.email'),
        body = this.get('body'),
        title = this.get('title'),
        self = this;
        var rantsIndexController = this.get('controllers.rants/index');

    this.store.findQuery('user', {email: user}).then(function(currentRanter) {
      var current = currentRanter.get('firstObject');
      if (body && title) {
        var rant = self.store.createRecord('rant', { body: body, title: title, user: current });
        rant.save().then(function(rant) {
          rantsIndexController.send('sortDate', rant);
          self.store.find('rant', rant.id).then(function(rantResult) {
            self.transitionToRoute('rants.index');
          });
        });
      }
    });
  },

    deleteRant: function(rant_id) {
      var self = this;
      this.store.find('rant', rant_id).then(function(rant) {
        rant.deleteRecord();
        rant.save();
      }.bind(this)).then(function(){
        self.reload();
        self.transitionToRoute('rants');
      });
    },
  }
});
