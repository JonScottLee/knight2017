import Ember from 'ember';

export default Ember.Route.extend({

	model () {
		return this.store.peekAll('player').get('firstObject');
	}

});
