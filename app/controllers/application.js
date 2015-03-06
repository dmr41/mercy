import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['searchparams'],
  searchparams: null,

  actions: {

    doSearch: function(params) {
      var input = this.get('searchparams');
      this.store.find('rant', {searchvale: input}).then(function (rants) {
        this.set('model', rants);
        this.transitionToRoute('rants');
        console.log(rants)
      }.bind(this));
    },

    newPath: function() {
      this.transitionToRoute('rants.new');
    },

    signupPath: function() {
      this.transitionToRoute('users.new');
    },
    }
});
