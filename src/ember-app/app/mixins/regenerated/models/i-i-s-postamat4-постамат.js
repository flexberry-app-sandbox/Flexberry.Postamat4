import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('string'),
  номер: DS.attr('number'),
  статус: DS.attr('i-i-s-postamat4-статусы'),
  службаДоставки: DS.belongsTo('i-i-s-postamat4-служба-доставки', { inverse: null, async: false }),
  ячейка: DS.hasMany('i-i-s-postamat4-ячейка', { inverse: 'постамат', async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-postamat4-постамат.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-postamat4-постамат.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  статус: {
    descriptionKey: 'models.i-i-s-postamat4-постамат.validations.статус.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  службаДоставки: {
    descriptionKey: 'models.i-i-s-postamat4-постамат.validations.службаДоставки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  ячейка: {
    descriptionKey: 'models.i-i-s-postamat4-постамат.validations.ячейка.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПостаматE', 'i-i-s-postamat4-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat4-служба-доставки', 'Служба доставки', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 3, displayMemberPath: 'наименование' }),
    ячейка: hasMany('i-i-s-postamat4-ячейка', 'Ячейка', {
      номерЯчейки: attr('Номер ячейки', { index: 0 }),
      хранение: belongsTo('i-i-s-postamat4-хранение', 'Хранение', {
        номер: attr('Номер', { index: 2, hidden: true }),
        датаНачала: attr('Дата начала хранения', { index: 3 }),
        датаЗавершения: attr('Дата завершения хранения', { index: 4 }),
        продление: attr('Продлен заказ на 3 дня', { index: 5 })
      }, { index: 1, displayMemberPath: 'номер' })
    })
  });

  modelClass.defineProjection('ПостаматL', 'i-i-s-postamat4-постамат', {
    номер: attr('Номер', { index: 0 }),
    адрес: attr('Адрес', { index: 1 }),
    статус: attr('Статус', { index: 2 }),
    службаДоставки: belongsTo('i-i-s-postamat4-служба-доставки', 'Наименование', {
      наименование: attr('Наименование', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
