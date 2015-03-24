import Ember from 'ember';

export default Ember.ArrayController.extend(Ember.SortableMixin,{
  isEditing: true,
  sortProperties : ['createdAt'],
  sortAscending  : false,

  actions: {
    newRant: function() {
      this.transitionToRoute('rants.new');
    },

    editRant: function(rant) {
      this.set('isEditing',false);
    },

    sortDate: function(rants){
      console.log("Index", rants)
      var self = this;

    },

    deleteRant: function(rant_id) {
      this.store.find('rant', rant_id).then(function(rant) {
        rant.deleteRecord();
        rant.save();
      });
    },
  }
});
