import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {

		handleSubmit (data) {
			event.preventDefault();

			this.send('handleSubmitInRoute', data);
		}

	}
});
