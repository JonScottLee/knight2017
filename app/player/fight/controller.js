import Ember from 'ember';

export default Ember.Controller.extend({
	beginButtonText: `Begin Fight`,
	enemyKilled: false,
	inBattle: false,
	playerActionText: `Attack!`
});
