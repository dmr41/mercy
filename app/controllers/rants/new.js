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
    // editSave: function(rant) {
    //   var body = rant.get('body');
    //   var title = rant.get('title');
    //   var user  = this.session.id;
    //   if(body && title) {
    //     this.set('isEditing', true);
    //     rant.save();
    //     this.transitionToRoute('rants');
    //   }
    // },
    newRant: function () {
    var user = this.get('session.email'),
        body = this.get('body'),
        title = this.get('title'),
        self = this;

    this.store.findQuery('user', {email: user}).then(function(currentRanter) {
      var current = currentRanter.get('firstObject')
      if (body && title) {
        var rant = self.store.createRecord('rant', { body: body, title: title, user: current, });
        rant.save();
      }
    });
  },

    deleteRant: function(rant_id) {
      var self = this;
      this.store.find('rant', rant_id).then(function(rant) {
        rant.deleteRecord();
        rant.save();
      }.bind(this)).then(function(){
        self.transitionToRoute('rants');
      });
    },
  }
});
