import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['users/new'],
  actions: {
    createNewUser: function(){
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      var newEmail = this.get('newEmail');
      var newPassword = this.get('newPassword');
      var usersController = this.get('controllers.users/new');
      var user = usersController.store.createRecord('user', { firstName: firstName, lastName: lastName, email: newEmail, pwd: newPassword});
        this.set('firstName', '');
        this.set('lastName', '');
        this.set('newEmail', '');
        this.set('newPassword', '');
        user.save();
    }
  }

});
