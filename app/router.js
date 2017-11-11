import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('player', function() {
    this.route('stats');

    this.route('items');

    this.route('skills', {
      path: ':model_id/skills'
    });

    this.route('techs', {
      path: ':model_id/techs'
    });

    this.route('gear');

    this.route('edit', {
      path: ':model_id/edit'
    });

    this.route('show', {
      path: ':player_id/show'
    });

    this.route('shop');
  });

  this.route('options');

  this.route('item', {
    path: 'item'
  }, function() {
    this.route('show', {
      path: ':item_id/show'
    });
  });
});

export default Router;
