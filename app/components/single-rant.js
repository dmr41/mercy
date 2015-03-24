import Ember from 'ember';
import EmberValidations from 'ember-validations';

export default Ember.Component.extend(EmberValidations.Mixin,{
  isEditing: true,
  outsidethis: this,
  needs: ['rants/index'],
  validations: {
     title: {
        presence: { message: 'Must have title'}
     },

      body: {
        length: { minimum: 10, messages: { tooShort: 'Rant must have at least 10 characters', tooLong: 'should be less than 5 characters' } }
      },
   },


  isEditingCurrent: function() {
    if(this.get('sessionId')) {
      return this.get('currentId').toString() === this.get('sessionId').toString();
    }
    else {
      return this.get('currentId') === this.get('sessionId');
    }
  }.property('sessionId'),


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
      if(body.length > 10 && title.length) {
        this.set('isEditing', true);
        this.set('errorToggle1', false);
        this.set('errorToggle2', false);
        rant.save();
      }
      else if(body.length > 10 ){
        this.set('errorToggle1', true);
        this.set('errorToggle2', false);
      }
      else if(title.length ){
        this.set('errorToggle1', false);
        this.set('errorToggle2', true);
      }
      else {
        this.set('errorToggle1', true);
        this.set('errorToggle2', true);
    };
    },


    componentDeleteSend: function(rant_id) {
      this.sendAction('insideRantComponent', rant_id);
    },
  }

});
