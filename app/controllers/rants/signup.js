import Ember from 'ember';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default Ember.ObjectController.extend(LoginControllerMixin,{
  authenticator: 'simple-auth-authenticator:devise',
  needs: ['users/new'],
  actions: {
    createNewUser: function(){
      var self = this
      var firstName = this.get('firstName');
      var lastName = this.get('lastName');
      var newEmail = this.get('newEmail');
      var newPassword = this.get('newPassword');
      var usersController = this.get('controllers.users/new');
      // if(this.errors.password.length || this.errors.identification.length) {
      //   this.set('errorToggle', true);
      // }
      // else {
      //   this.set('errorToggle', false);
      //   this._super().then(function() { alert("success"); }, function() { alert("Please try again or sign up for rantly if you are not a member!"); });
      // }
      var user = usersController.store.createRecord('user', { firstName: firstName, lastName: lastName, email: newEmail,  password: newPassword});
      // if(this.errors.firstName.length ||
      //    this.errors.lastName.length ||
      //    this.errors.newEmail.length ||
      //    this.errors.newPassword.length) {
      //      this.set('errorToggle', true);
      //    }
      if(false){}
      else{
        this.set('errorToggle', false);
        //   this._super().then(function() { alert("success"); }, function() { alert("Please try again or sign up for rantly if you are not a member!"); });

        this.set('firstName', '');
        this.set('lastName', '');
        this.set('newEmail', '');
        this.set('newPassword', '');
        user.save().then(function() {
          self.transitionToRoute('rants.new');
          self.get('session').authenticate('simple-auth-authenticator:devise', {
          identification: newEmail,
          password: newPassword
        }).then(function(){
          console.log("Success!!!")
        });
      });
      }

    }
  }

});
