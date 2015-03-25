import Ember from 'ember';

export default Ember.ArrayController.extend(Ember.SortableMixin,{
  isEditing: true,
  sortProperties : ['createdAt'],
  sortAscending  : false,
  needs: ['rants'],

  actions: {
    newRant: function() {
      this.transitionToRoute('rants.new');
    },

    editRant: function(rant) {
      this.set('isEditing',false);
    },

    sortDate: function(rants){
      var self = this;

    },
    reloadRant: function(defer) {
      var self = this;
      var appController = this;
      var rantsIndexController = this.get('controllers.rants');
      rantsIndexController.store.fetchAll('rant').then(function (rants) {
        var workingModel = rants;
        defer.resolve();
      }.bind(this));


    },
    deleteRant: function(rant_id) {
      this.store.find('rant', rant_id).then(function(rant) {
        rant.deleteRecord();
        rant.save();
      });
    },
  }
});
