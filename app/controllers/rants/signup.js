import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import EmberValidations from 'ember-validations';

export default Ember.ObjectController.extend(LoginControllerMixin, EmberValidations.Mixin,{
  authenticator: 'simple-auth-authenticator:devise',
  needs: ['users/new'],
  validations: {
      firstName: {
        presence: {message: "Can't be blank" }
     },

      lastName: {
        presence: {message: "Can't be blank" }
      },

      newEmail: {
        format: { with: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/, message: 'Not a valid email address' }
      },

      newPassword: {
        length: { minimum: 5, messages: { tooShort: 'Must be at least 5 characters', tooLong: 'should be less than 5 characters' } }
      },

      amaMember: {
        presence: { message: 'Email address already registered with rantly!'}
      }

   },

  actions: {
    createNewUser: function(){
      var self = this
      var firstName = this.get('firstName');
      console.log(this.errors.firstName.length)
      var lastName = this.get('lastName');
      var newEmail = this.get('newEmail');
      var newPassword = this.get('newPassword');
      var usersController = this.get('controllers.users/new');

      var user = usersController.store.createRecord('user', { firstName: firstName, lastName: lastName, email: newEmail,  password: newPassword});
      if(this.errors.firstName.length ||
         this.errors.lastName.length ||
         this.errors.newEmail.length ||
         this.errors.newPassword.length) {
         this.set('errorToggle', true);
         this.set('errorToggle3', true);
         }
      else
      {
        user.save().then(function(){
          // self.set('errorToggle', false);
          // self.set('firstName', '');
          // self.set('lastName', '');
          // self.set('newEmail', '');
          // self.set('newPassword', '');
          self.transitionToRoute('rants.new');
          self.get('session').authenticate('simple-auth-authenticator:devise', {
            identification: newEmail,
            password: newPassword
          })}, function(){
            self.set('errorToggle', false);
            self.set('errorToggle3', true);

            })
      }
    }
  }

});
