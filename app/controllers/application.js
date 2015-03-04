import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newPath: function() {
      this.transitionToRoute('rants.new');
    },
    signupPath: function() {
      this.transitionToRoute('users.new');
    },
    }
});
