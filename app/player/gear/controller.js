import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		equip () {

		},

		remove () {

		},

		drop (item) {
			item.destroyRecord();
		}

	}

});
