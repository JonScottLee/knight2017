import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('player', function() {
    this.route('equipment', {
      path: ':player_id'
    });

    this.route('items', {
      path: ':player_id'
    });
  });

  this.route('shop', {
    path: ':shop_id'
  }, function() {
    this.route('index', {
      path: ':shop_id'
    });

    this.route('buy', {
      path: ':shop_id'
    });

    this.route('sell', {
      path: ':shop_id'
    });
  });
});

export default Router;
