import Ember from 'ember';

export default Ember.ObjectController.extend({
  stuff: localStorage.getItem('stuff'),
});
