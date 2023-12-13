import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat4-служба-доставки', 'Unit | Model | i-i-s-postamat4-служба-доставки', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-postamat4-логистика',
    'model:i-i-s-postamat4-пользователь',
    'model:i-i-s-postamat4-постамат',
    'model:i-i-s-postamat4-посылка',
    'model:i-i-s-postamat4-служба-доставки',
    'model:i-i-s-postamat4-транзакция',
    'model:i-i-s-postamat4-хранение',
    'model:i-i-s-postamat4-ячейка',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
