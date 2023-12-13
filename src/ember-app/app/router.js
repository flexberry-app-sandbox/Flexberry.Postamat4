import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-postamat4-логистика-l');
  this.route('i-i-s-postamat4-логистика-e',
  { path: 'i-i-s-postamat4-логистика-e/:id' });
  this.route('i-i-s-postamat4-логистика-e.new',
  { path: 'i-i-s-postamat4-логистика-e/new' });
  this.route('i-i-s-postamat4-пользователь-l');
  this.route('i-i-s-postamat4-пользователь-e',
  { path: 'i-i-s-postamat4-пользователь-e/:id' });
  this.route('i-i-s-postamat4-пользователь-e.new',
  { path: 'i-i-s-postamat4-пользователь-e/new' });
  this.route('i-i-s-postamat4-постамат-l');
  this.route('i-i-s-postamat4-постамат-e',
  { path: 'i-i-s-postamat4-постамат-e/:id' });
  this.route('i-i-s-postamat4-постамат-e.new',
  { path: 'i-i-s-postamat4-постамат-e/new' });
  this.route('i-i-s-postamat4-служба-доставки-l');
  this.route('i-i-s-postamat4-служба-доставки-e',
  { path: 'i-i-s-postamat4-служба-доставки-e/:id' });
  this.route('i-i-s-postamat4-служба-доставки-e.new',
  { path: 'i-i-s-postamat4-служба-доставки-e/new' });
  this.route('i-i-s-postamat4-транзакция-l');
  this.route('i-i-s-postamat4-транзакция-e',
  { path: 'i-i-s-postamat4-транзакция-e/:id' });
  this.route('i-i-s-postamat4-транзакция-e.new',
  { path: 'i-i-s-postamat4-транзакция-e/new' });
  this.route('i-i-s-postamat4-хранение-l');
  this.route('i-i-s-postamat4-хранение-e',
  { path: 'i-i-s-postamat4-хранение-e/:id' });
  this.route('i-i-s-postamat4-хранение-e.new',
  { path: 'i-i-s-postamat4-хранение-e/new' });
});

export default Router;
