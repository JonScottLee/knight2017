import Ember from 'ember';

export function battleHpFormatter(params) {

	console.info(params[0], params[1]);
	return parseInt((params[0] / params[1]) * 100, 10);
}

export default Ember.Helper.helper(battleHpFormatter);
