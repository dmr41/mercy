import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import EmberValidations from 'ember-validations';
export default Ember.Controller.extend(LoginControllerMixin,EmberValidations.Mixin,{
  authenticator: 'simple-auth-authenticator:devise',
  queryParams: ['searchparams'],
  searchparams: null,
  isLoggingIn: true,
  needs: ['rants/index'],

  validations: {
    password: {
      length: { minimum: 5, messages: { tooShort: 'Must be at least 5 characters', tooLong: 'should be less than 5 characters' } }
     },

      identification: {
        format: { with: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: 'Not a valid email address' }
      },

   },



  actions: {
    authenticate: function() {
      this.set('errorToggle', true);
      if(this.errors.password.length || this.errors.identification.length) {}
      else {
        this._super().then(function() { alert("success") }, function() { alert("Please try again or sign up for rantly if you are not a member!") });
      }
    },
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
