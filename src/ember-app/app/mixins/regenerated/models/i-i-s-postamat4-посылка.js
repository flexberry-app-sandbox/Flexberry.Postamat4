import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  номер: DS.attr('number'),
  отправитель: DS.attr('string'),
  получатель: DS.attr('string'),
  статус: DS.attr('i-i-s-postamat4-статус'),
  логистика: DS.belongsTo('i-i-s-postamat4-логистика', { inverse: null, async: false }),
  транзакция: DS.belongsTo('i-i-s-postamat4-транзакция', { inverse: null, async: false }),
  хранение: DS.belongsTo('i-i-s-postamat4-хранение', { inverse: 'посылка', async: false })
});

export let ValidationRules = {
  номер: {
    descriptionKey: 'models.i-i-s-postamat4-посылка.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отправитель: {
    descriptionKey: 'models.i-i-s-postamat4-посылка.validations.отправитель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  получатель: {
    descriptionKey: 'models.i-i-s-postamat4-посылка.validations.получатель.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat4-посылка.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  логистика: {
    descriptionKey: 'models.i-i-s-postamat4-посылка.validations.логистика.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  транзакция: {
    descriptionKey: 'models.i-i-s-postamat4-посылка.validations.транзакция.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  хранение: {
    descriptionKey: 'models.i-i-s-postamat4-посылка.validations.хранение.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПосылкаE', 'i-i-s-postamat4-посылка', {
    номер: attr('Номер', { index: 0 }),
    статус: attr('Статус', { index: 1 }),
    отправитель: attr('Отправитель', { index: 2 }),
    получатель: attr('Получатель', { index: 3 }),
    транзакция: belongsTo('i-i-s-postamat4-транзакция', 'Транзакция', {
      время: attr('Время', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'время' }),
    логистика: belongsTo('i-i-s-postamat4-логистика', 'Логистика', {
      информация: attr('Информация', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'информация' })
  });
};
