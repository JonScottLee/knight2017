import Ember from 'ember';

export default Ember.Component.extend({

	actions: {

		back () {
			window.history.back();
		}
	}

});
