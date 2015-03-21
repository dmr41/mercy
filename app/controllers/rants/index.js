import Ember from 'ember';

export default Ember.ArrayController.extend(Ember.SortableMixin,{
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
    sortDate: function(rants){
      console.log("Index", rants)
      var self = this;

     // Find the post from the store
      // sort by age
    },

    deleteRant: function(rant_id) {
      this.store.find('rant', rant_id).then(function(rant) {
        rant.deleteRecord();
        rant.save();
      });
    },
  }
});
