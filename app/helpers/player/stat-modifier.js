import Ember from 'ember';
import Helper from "@ember/component/helper";

export default Helper.extend({
  compute(params) {
    let theStat = params[0];
	let unmodifiedStatValue = params[1];
	let items;

	let finalModValue = 0;

	params[2].forEach(function (item) {
		if (
			item.get('equipped')
			&& item.get('stats')
			&& item.get('stats')[theStat]
		) {
			finalModValue += parseInt(item.get('stats')[theStat], 10);
		}
	});

	return unmodifiedStatValue + finalModValue;
  }
});