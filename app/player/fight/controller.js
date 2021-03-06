import Ember from 'ember';

export default Ember.Controller.extend({
	attackBtnDisabled: false,
	attackBtnText: `Attack!`,
	beginButtonText: `Begin Fight`,
	enemyKilled: false,
	inBattle: false,
	playerActionText: `Attack!`,
	enemyHPColor: '#F53435',
	playerHPColor: '#42A48D'
});
