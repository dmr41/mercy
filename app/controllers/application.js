import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['searchparams'],
  searchparams: null,
  isLoggingIn: true,
  needs: ['rants/index'],
  actions: {

    doSearch: function() {
      var input = this.get('searchparams');
      var appController = this;
      var rantsIndexController = this.get('controllers.rants/index');
      appController.transitionToRoute('rants').then(function() {
      appController.store.find('rant', {searchvale: input}).then(function (rants) {
        rantsIndexController.set('model', rants);
      }.bind(appController));
    });
    },

    newPath: function() {
      this.transitionToRoute('rants.new');
    },

    signInToggle: function() {
      this.set('isLoggingIn', false);
    },

    LogOut: function () {
      this.set('isLoggingIn', true);

    },

    login: function(){
      var yourEmail = "";
      var yourPassword = "";
    }
  },

});
