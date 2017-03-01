import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Ember.RSVP.Promise(() => {
      debugger;
    }, () => {
      debugger;
    });
  }
});
