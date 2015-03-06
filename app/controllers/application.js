import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['searchparams'],
  searchparams: null,
  needs: ['rants/index'],
  actions: {

    doSearch: function() {

      var input = this.get('searchparams');
      var controller = this.get('controllers.rants/index');
      this.store.find('rant', {searchvale: input}).then(function (rants) {
        controller.set('model', rants);
        console.log(rants);
        console.log(controller);
      }.bind(this));
        this.transitionToRoute('rants.index');
    },

    newPath: function() {
      this.transitionToRoute('rants.new');
    },

    signupPath: function() {
      this.transitionToRoute('users.new');
    },
  },

});
