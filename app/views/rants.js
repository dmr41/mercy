import Ember from 'ember';

export default Ember.View.extend({

  didInsertElement: function(){

             this.$(".rant-anima").hide();

             $('.rant-anima').fadeIn(1000);


     }

});