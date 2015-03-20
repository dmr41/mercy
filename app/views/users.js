import Ember from 'ember';

export default Ember.View.extend({

  didInsertElement: function(){

             this.$(".user-anima").hide();

             $('.user-anima').fadeIn(1500);

     }

});
