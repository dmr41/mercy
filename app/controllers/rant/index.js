import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(EmberValidations.Mixin,{
  isEditing: true,
  needs: ['rants/index'],
  validations: {
     title: {
      presence: { message: 'Must have title'}
     },

      body: {
        length: { minimum: 144, messages: { tooShort: 'Rant must have at least 144 characters', tooLong: 'should be less than 5 characters' } }
      },
   },

    isEditingCurrent: function() {
      return false;

    },
  actions: {

    editRant: function(rant) {
      this.set('isEditing',false);
    },
    editCancel: function(rant) {
      this.set('isEditing', true);
      this.store.find('rant', rant.id).then(function() {
        this.transitionToRoute('rants');
      })

    },

    editSave: function(rant) {
      var body = rant.get('body');
      var title = rant.get('title');

      if(this.errors.body.length || this.errors.title.length) {
        this.set('errorToggle', true);
      }
      else {
        this.set('errorToggle', false);
        this.set('isEditing', true);
        rant.save();
        this.transitionToRoute('rants');
      }
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
