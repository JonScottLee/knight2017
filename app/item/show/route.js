import Ember from 'ember';

export default Ember.Route.extend({

	model (params) {
		return Ember.RSVP.hash({
			player: this.store.findAll('player'),
			item: this.store.find('item', params.item_id).then((item) => {
				return item.toJSON();
			})
		});
	}
});
