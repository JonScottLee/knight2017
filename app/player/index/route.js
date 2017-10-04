import Ember from 'ember';

let player = [{
  firstName: "Jon",
  lastName: "Lee"
}];

export default Ember.Route.extend({

	model() {
		return player.objectAt(0)
	}

});
