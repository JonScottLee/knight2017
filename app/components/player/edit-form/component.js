import Ember from 'ember';

export default Ember.Component.extend({

	actions: {

		save (model) {
			console.info("save from component");
		},

		cancel () {
			console.info("cancel from component");
		}
	}

});
