import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.ObjectController.extend(LoginControllerMixin,{
  authenticator: 'simple-auth-authenticator:devise',
  needs: ['users/new'],
  actions: {
    createNewUser: function(){
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      var newEmail = this.get('newEmail');
      var newPassword = this.get('newPassword');
      var usersController = this.get('controllers.users/new');
      var user = usersController.store.createRecord('user', { firstName: firstName, lastName: lastName, email: newEmail,  password: newPassword});
        this.set('firstName', '');
        this.set('lastName', '');
        this.set('newEmail', '');
        this.set('newPassword', '');
        user.save();
    }
  }

});
