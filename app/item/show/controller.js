import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		back () {
			window.history.back();
		}
	}

});
