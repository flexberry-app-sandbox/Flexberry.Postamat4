import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-postamat4-хранение', 'Unit | Serializer | i-i-s-postamat4-хранение', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-postamat4-хранение',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-postamat4-оплата',
    'transform:i-i-s-postamat4-состояние',
    'transform:i-i-s-postamat4-статус',
    'transform:i-i-s-postamat4-статусы',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
