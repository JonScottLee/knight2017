import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		useItem (item) {
			console.info("useitem from controller");
		},

		dropItem (item) {
			console.info("dropitem from controller");
		}

	}

});
